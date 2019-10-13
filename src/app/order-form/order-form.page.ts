import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LogisticService } from '../logistic.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.page.html',
  styleUrls: ['./order-form.page.scss'],
})
export class OrderFormPage implements OnInit {

  CargoForm = new FormGroup({
    type: new FormControl("", [
      Validators.required
    ]),
    weight: new FormControl("", [
      Validators.required
    ]),
    dimension: new FormControl("", [
      Validators.required
    ]),
  })

  typeOptions = ["Parcel","Document","Vehicle","Part" ]

  weightOptions =["Less than 1KG","Less Than 5KG","More than 5KG"]

  dimensionOptions = ["12X12 CM","24X24 CM", "BOX","Vehicle"]


  constructor(private logisticService: LogisticService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  onSelectType(type){
    this.CargoForm.controls.type.setValue(type)
  }

  onSelectWeight(weight){
    this.CargoForm.controls.weight.setValue(weight)
  }

  onSelectDimension(dimension){
    this.CargoForm.controls.dimension.setValue(dimension)
  }

  onClickNext(){
    this.logisticService.setFormValues(this.CargoForm.value, "cargodetail")
    this.navCtrl.navigateForward("/cargo-description")
  }

  isValid(){
    return this.CargoForm.controls.type.valid
  }
}
