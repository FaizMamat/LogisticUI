import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LogisticService } from '../logistic.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cargo-description',
  templateUrl: './cargo-description.page.html',
  styleUrls: ['./cargo-description.page.scss'],
})
export class CargoDescriptionPage implements OnInit {

  cargomoreDetailForm = new FormGroup({
    description: new FormControl(),
    disclaimer: new FormControl("", [
      Validators.required
    ])
  })

 disclaimerOptions = ["hazardous materials", "insurance required"]

  constructor(private logisticService: LogisticService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  onSelectDisclaimer(disclaimer){
    this.cargomoreDetailForm.controls.disclaimer.setValue(disclaimer)
  }

  onClickNext(){
    this.logisticService.setFormValues(this.cargomoreDetailForm.value, "moredetail")
    this.navCtrl.navigateForward("/shipping-detail")
  }

  isValid(){
    return this.cargomoreDetailForm.controls.disclaimer.valid
  }
}


