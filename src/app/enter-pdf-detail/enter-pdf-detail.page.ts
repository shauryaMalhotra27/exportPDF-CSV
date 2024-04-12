import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-pdf-detail',
  templateUrl: './enter-pdf-detail.page.html',
  styleUrls: ['./enter-pdf-detail.page.scss'],
})
export class EnterPdfDetailPage implements OnInit {

  constructor(public navCtrl: NavController, public router: Router, public plt: Platform) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  information = {
    firstName : "",
    lastName : "",
    username : "",
    email : "",
    gender : "",
    phone : "",
    hobbies : ""
  }

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

  navigateToViewPdf(){

  }

}
