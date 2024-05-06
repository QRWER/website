import {Component, NgModule} from '@angular/core';
import {FormControl} from "@angular/forms";
import {NONE_TYPE} from "@angular/compiler";


interface GPU {
  number: number,
  title: string;
  ddrValue: string;
  typeDddr: string;
  bus: string;
  monitorNumber: string;
  createdAt: Date;
  lastModifiedAt: Date;
}

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})

export class Page1Component {
  GPUs: GPU[] = [];
  newGPU: GPU = {
    number: 0,
    title: '',
    ddrValue: '',
    typeDddr: '-',
    bus: '',
    monitorNumber: '',
    createdAt: new Date(),
    lastModifiedAt: new Date()
  };

  addTask() {
    this.newGPU.number = this.GPUs.length + 1;
    this.GPUs.push({ ...this.newGPU });
    this.newGPU.createdAt = new Date();
    this.newGPU.lastModifiedAt = new Date();
  }

  updateTask(task: GPU) {
    task.ddrValue = this.newGPU.ddrValue;
    task.typeDddr = this.newGPU.typeDddr;
    task.bus = this.newGPU.bus;
    task.monitorNumber = this.newGPU.monitorNumber;
    task.lastModifiedAt = new Date();
  }

  protected readonly Number = Number;
  protected readonly isNaN = isNaN;
}
