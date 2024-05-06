import {Component, NgModule} from '@angular/core';

interface CPU {
  number: number;
  brand: string;
  name: string;
  socket: string;
  countCore: string;
  GPU: string;
  TDP: string;
  createdAt: Date;
  lastModifiedAt: Date;
}

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})

export class Page2Component {
  CPUs: CPU[] = [];
  newCPU: CPU = {
    number: 0,
    brand: '-',
    name: '',
    socket: '-',
    countCore: '',
    GPU: '-',
    TDP: '',
    createdAt: new Date(),
    lastModifiedAt: new Date()
  };

  addTask() {
    this.newCPU.number = this.CPUs.length + 1;
    this.CPUs.push({ ...this.newCPU });
    this.newCPU.createdAt = new Date();
    this.newCPU.lastModifiedAt = new Date();
  }

  updateTask(CPU: CPU) {
    CPU.brand = this.newCPU.brand;
    CPU.socket = this.newCPU.socket;
    CPU.name = this.newCPU.name;
    CPU.countCore = this.newCPU.countCore;
    CPU.GPU = this.newCPU.GPU;
    CPU.TDP = this.newCPU.TDP;
    CPU.lastModifiedAt = new Date();
  }

  protected readonly isNaN = isNaN;
  protected readonly Number = Number;
}
