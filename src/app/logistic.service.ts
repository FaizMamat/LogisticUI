import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface CargodetailFormValues {
  type: string
  weight :string
  dimension: string
}

interface cargomoreDetailFormValues {
  description : string
  disclaimer: string
}


interface shippingDetailFormValues{
  address: string
  state: string
  country: string
  postalcode: number
  contactnum: number
  contactname: string
}

interface ScheduleFormValues{
  day: string
  time: string
  
}

interface FormValues {
  cargodetail?: CargodetailFormValues
  moredetail? : cargomoreDetailFormValues
  shippingdetail? : shippingDetailFormValues
  schedule? : ScheduleFormValues
}

@Injectable({
  providedIn: 'root'
})

export class LogisticService {

  formValues = new BehaviorSubject<FormValues>({})
  constructor(private http: HttpClient) {}

  setFormValues(specificFormValues, formName){
    let currentFormValues = this.formValues.getValue()
    currentFormValues[formName] = specificFormValues

    this.formValues.next(currentFormValues)
  }

  saveToDb(){
    let currentValue = this.formValues.getValue()

    this.http.post("http://localhost:3000/logistics", {
      "type": currentValue.cargodetail.type,
      "weight":currentValue.cargodetail.weight,
      "dimension":currentValue.cargodetail.dimension,
      "description": currentValue.moredetail.description,
      "disclaimer": currentValue.moredetail.disclaimer,
      "address": currentValue.shippingdetail.address,
      "state": currentValue.shippingdetail.state,
      "country": currentValue.shippingdetail.country,
      "postalcode": currentValue.shippingdetail.postalcode,
      "contactnum": currentValue.shippingdetail.contactnum,
      "contactname": currentValue.shippingdetail.contactname,
      "day": currentValue.schedule.day,
      "time": currentValue.schedule.time,
    }).subscribe(response => {
      console.log(response)
    })
}

}
