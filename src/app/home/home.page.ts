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

