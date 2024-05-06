import {Component, NgModule} from '@angular/core';

interface Motherboard {
  number: number;
  brand: string;
  socket: string;
  chipset: string;
  type: string;
  ddr: string;
  pci: string;
  createdAt: Date;
  lastModifiedAt: Date;
}

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})

export class Page3Component {
  motherboards: Motherboard[] = [];
  newMotherboard: Motherboard = {
    number: 0,
    brand: '',
    socket: '-',
    chipset: '',
    type: '-',
    ddr: '-',
    pci: '-',
    createdAt: new Date(),
    lastModifiedAt: new Date()
  };

  addTask() {
    this.newMotherboard.number = this.motherboards.length + 1;
    this.motherboards.push({ ...this.newMotherboard });
    this.newMotherboard.createdAt = new Date();
    this.newMotherboard.lastModifiedAt = new Date();
  }

  updateTask(motherboard: Motherboard) {
    motherboard.brand = this.newMotherboard.brand;
    motherboard.socket = this.newMotherboard.socket;
    motherboard.chipset = this.newMotherboard.chipset;
    motherboard.type = this.newMotherboard.type;
    motherboard.ddr = this.newMotherboard.ddr;
    motherboard.pci = this.newMotherboard.pci;
    motherboard.lastModifiedAt = new Date();
  }
}
