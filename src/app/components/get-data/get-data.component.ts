import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../service/get-data.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent implements OnInit {

  listPersonas: any[] = [];

  constructor(private _getDataService: GetDataService) { }

  ngOnInit(): void {
  }

  listarPersonas() {
    this._getDataService.getListPersonas().subscribe(data => {
      this.listPersonas = data;
    }, error => {
      alert("ERROR AL OBTENER LOS DATOS");
    })
  }

}