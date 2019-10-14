import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LogisticService } from '../logistic.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-shippingtime',
  templateUrl: './shippingtime.page.html',
  styleUrls: ['./shippingtime.page.scss'],
})
export class ShippingtimePage implements OnInit {

  ScheduleForm = new FormGroup({
    day: new FormControl("", [
      Validators.required
    ]),
    time: new FormControl("", [
      Validators.required
    ])
  })

  dayOptions = ["Monday","Tuesday","Wednesday","Thursday","Friday" ]

  timeOptions =["8am -10pm","10.30am - 12.30pm","2pm -5pm"]

  


  constructor(private logisticService: LogisticService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  onSelectDay(day){
    this.ScheduleForm.controls.day.setValue(day)
  }

  onSelectTime(time){
    this.ScheduleForm.controls.time.setValue(time)
  }



  onClickNext(){
    this.logisticService.setFormValues(this.ScheduleForm.value, "schedule")
    this.logisticService.saveToDb()
  }


  isValid(){
    return this.ScheduleForm.controls.day.valid
  }
}

