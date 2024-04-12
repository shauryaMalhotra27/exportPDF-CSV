//----------- TRY TAKE ONE -----------------
/**
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
const { Filesystem, FileOpener } = Plugins;

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

// Register fonts with pdfMake
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  information = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    gender: "",
    phone: "",
    hobbies: ""
  };

  constructor(public navCtrl: NavController) { }

  async generatePdf() {
    const documentDefinition: any = {
      content: [
        { text: 'REMINDER', style: 'header' },
        { text: new Date().toTimeString(), alignment: 'right' },
        { text: 'From', style: 'subheader' },
        { text: this.information.firstName },
        { text: 'To', style: 'subheader' },
        { text: this.information.lastName },
        { text: this.information.username, style: 'story', margin: [0, 20, 0, 20] },
        { ul: ['Bacon', 'Rips', 'BBQ'] }
      ],
      styles: {
        header: { fontSize: 18, bold: true },
        subheader: { fontSize: 14, bold: true, margin: [0, 15, 0, 0] },
        story: { italic: true, alignment: 'center', width: '50%' }
      }
    };

    const pdfDoc = pdfMake.createPdf(documentDefinition);
    const pdfBuffer = await new Promise<ArrayBuffer>((resolve, reject) => {
      pdfDoc.getBuffer((buffer: ArrayBuffer) => {
        resolve(buffer);
      });
    });

    const pdfUint8Array = new Uint8Array(pdfBuffer);

    if (this.isCordova()) {
      await this.saveAndOpenPdfCordova(pdfUint8Array);
    } else {
      this.saveAndOpenPdfWeb(pdfUint8Array);
    }
  }

  // isCordova() {
  //   return !!window['cordova'];

  // }

  isCordova(): boolean {
    return !!window?.cordova;
  }

  async saveAndOpenPdfCordova(pdfUint8Array: Uint8Array) {
    const { Filesystem, FileOpener } = Plugins;

    try {
      const pdfFilePath = 'example/example.pdf';
      await Filesystem['writeFile']({
        path: pdfFilePath,
        data: pdfUint8Array,
        directory: FileSystemDirectoryEntry.External
      });

      await FileOpener['open']({
        path: pdfFilePath,
        contentType: 'application/pdf'
      });

      console.log('PDF generated, saved, and opened successfully on Cordova platform!');
    } catch (error) {
      console.error('Error generating, saving, or opening PDF on Cordova platform:', error);
    }
  }

  saveAndOpenPdfWeb(pdfUint8Array: Uint8Array) {
    const blob = new Blob([pdfUint8Array], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'example.pdf';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
    console.log('PDF generated and downloaded successfully on web platform!');
  }

  clearValues(){
    this.information.firstName = '';
    this.information.lastName = '';
    this.information.username = '';
    this.information.email = '';
    this.information.gender = '';
    this.information.phone = '';
    this.information.hobbies = '';
  }

  exportCsv(){
    console.log("EXPORTED CSV");
  }
}
*/


//----------- TRY TAKE TWO -----------------
/**
import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';

// import { File } from '@ionic-native/file/ngx';
// import { FileOpener } from '@ionic-native/file-opener/ngx';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  information = {
    firstName : "",
    lastName : "",
    username : "",
    email : "",
    gender : "",
    phone : "",
    hobbies : ""
  }

  constructor(public navCtrl: NavController, public router: Router, public plt: Platform) {}

  pdfObj:any = null;

  ionViewDidEnter() {
    this.clearValues();
  }

  clearValues(){
    this.information.firstName = '';
    this.information.lastName = '';
    this.information.username = '';
    this.information.email = '';
    this.information.gender = '';
    this.information.phone = '';
    this.information.hobbies = '';
  }

  generatePdf(){
    console.log(
      `First Name: ${this.information.firstName}`,
      `Last Name: ${this.information.lastName}`,
      `Username: ${this.information.username}`,
      `Email: ${this.information.email}`,
      `Gender: ${this.information.gender}`
    );

    var docDefinition: any = {
      content: [
        { text: 'REMINDER', style: 'header' },
        { text: new Date().toTimeString(), alignment: 'right' },

        { text: 'From', style: 'subheader' },
        { text: this.information.firstName },

        { text: 'To', style: 'subheader' },
        this.information.lastName,

        { text: this.information.username, style: 'story', margin: [0, 20, 0, 20] },

        {
          ul: [
            'Bacon',
            'Rips',
            'BBQ',
          ]
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 0]
        },
        story: {
          italic: true,
          alignment: 'center',
          width: '50%',
        }
      }
    }

    this.pdfObj = pdfMake.createPdf(docDefinition);
    this.pdfObj.download();
  }

  exportCsv(){
  }

}
*/


//----------- TRY TAKE THREE -----------------

import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{

  firstName: string= '';
  lastName: string= '';
  userName: string = '';
  email: string = '';
  gender:string = '';
  phone:any = null;
  hobbies: string = '';

  constructor(public navCtrl: NavController, public router: Router, public plt: Platform) {
  }

  ngOnInit(): void {
  console.log("**Welcome To Page One");
  }

  clearValues(){
    this.firstName = '';
    this.lastName = '';
    this.userName = '' ;
    this.email = '';
    this.gender = '';
    this.phone = null;
    this.hobbies = '';
  }

  navigateToViewPdf(){

    const information = {
      firstNameInfo : this.firstName,
      lastNameInfo : this.lastName,
      usernameInfo : this.userName,
      emailInfo : this.email,
      genderInfo : this.gender,
      phoneInfo : this.phone,
      hobbiesInfo : this.hobbies
    }

    const dataString = JSON.stringify(information);
    console.log("**STRING VALUE TO BE SENT = ",dataString, information);
    console.log("**NAVIGATING TO VIEW PAGE");
    this.navCtrl.navigateForward(['view-pdf', {data: dataString}]);

  }

}

