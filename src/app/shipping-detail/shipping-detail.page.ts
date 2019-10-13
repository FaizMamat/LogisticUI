import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LogisticService } from '../logistic.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-shipping-detail',
  templateUrl: './shipping-detail.page.html',
  styleUrls: ['./shipping-detail.page.scss'],
})
export class ShippingDetailPage implements OnInit {

  shippingDetailForm = new FormGroup({
    address: new FormControl(),
    state: new FormControl(),
    country: new FormControl(),
    postalcode: new FormControl(),
    contactnum: new FormControl(),
    contactname: new FormControl()
  })

 disclaimerOptions = ["hazardous materials", "insurance required"]

  constructor(private logisticService: LogisticService, private navCtrl: NavController) { }

  ngOnInit() {
  }


  onClickNext(){
    this.logisticService.setFormValues(this.shippingDetailForm.value, "shippingdetail")
    this.navCtrl.navigateForward("/shippingtime")
  }

  isValid(){
    return this.shippingDetailForm.controls.address.valid
  }
}
