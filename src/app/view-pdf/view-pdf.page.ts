import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-view-pdf',
  templateUrl: './view-pdf.page.html',
  styleUrls: ['./view-pdf.page.scss'],
})
export class ViewPdfPage {
  receivedData: any;

  firstName?: string;
  lastName?: string;
  userName?: number;
  email?: string;
  gender?: string;
  phone?: number;
  hobbies?: string;

  pdfObj: any = null;

  btnSwitch: boolean = false;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private pdfGenerator: PDFGenerator,
    private file: File,
    private fileOpener: FileOpener,
    private plt: Platform
  ) {
    // Retrieve data passed through navigation
    this.receivedData = JSON.parse(this.activatedRoute.snapshot.params['data']);
    // Log received data to console
    console.log('data is = ', this.receivedData);
  }

  // Function to create PDF document
  createPdf() {
    this.btnSwitch = true;
    // Define document structure and content
    var docDefinition: any = {
      content: [
        // Title of the document
        { text: 'Your Information', style: 'header' },
        // Current timestamp aligned to the right
        { text: new Date().toTimeString(), alignment: 'right' },
        // Data fields with labels and corresponding values
        { text: 'First Name :', style: 'subheader' },
        { text: this.receivedData.firstNameInfo },
        { text: 'Last Name :', style: 'subheader' },
        { text: this.receivedData.lastNameInfo },
        { text: 'Username :', style: 'subheader' },
        { text: this.receivedData.usernameInfo },
        { text: 'Email :', style: 'subheader' },
        { text: this.receivedData.emailInfo },
        { text: 'Gender :', style: 'subheader' },
        { text: this.receivedData.genderInfo },
        { text: 'Phone :', style: 'subheader' },
        { text: this.receivedData.phoneInfo },
        { text: 'Hobbies :', style: 'subheader' },
        { text: this.receivedData.hobbiesInfo },
      ],

      // Styles for the document
      styles: {
        header: {
          fontSize: 20,
          bold: true,
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 0],
        },
      },
    };
    // Create PDF object using pdfMake library
    this.pdfObj = pdfMake.createPdf(docDefinition);
  }

  // Function to download the PDF document
  downloadPdf() {
    // Check if the platform is Cordova (for mobile app)
    if (this.plt.is('cordova')) {
      // If platform is Cordova, generate PDF buffer
      this.pdfObj.getBuffer((buffer: BlobPart) => {
        // Create a blob from the buffer
        var blob = new Blob([buffer], { type: 'application/pdf' });

        // Save the PDF file to the data directory of the app
        this.file
          .writeFile(this.file.dataDirectory, 'myletter.pdf', blob, {
            replace: true,
          })
          .then((fileEntry) => {
            // Open the PDF file with the default PDF viewer on the device
            this.fileOpener.open(
              this.file.dataDirectory + 'myletter.pdf',
              'application/pdf'
            );
          });
      });
    } else {
      // If platform is not Cordova (e.g., browser), download PDF directly
      this.pdfObj.download();
    }
  }

  // Placeholder function for downloading CSV (not implemented)
  downloadCsv() {}
}
