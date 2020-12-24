import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Profils } from '../_models/profils-model';
import { ProfilService } from '../auth/profil.service';

@Component({
  selector: 'app-profils-list',
  templateUrl: './profils-list.component.html',
  styleUrls: ['./profils-list.component.css']
})
export class ProfilsListComponent implements OnInit {
  public displayedColumns = ['libelle', 'details', 'update', 'delete'
];
public dataSource = new MatTableDataSource<Profils>();

  constructor(private proService: ProfilService) { }

  ngOnInit(): void {
    console.log(this.getAllProfils());
  }
  getAllProfils = () => {
    this.proService.getData()
    .subscribe(res => {
      this.dataSource.data = res;
      console.log(this.dataSource.data );
    })
  }
  public redirectToDetails = (id: string) => {
    
  }
  public redirectToUpdate = (id: string) => {
    
  }
  public redirectToDelete = (id: string) => {
    
  }

}
