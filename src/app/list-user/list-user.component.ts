import { User } from './../_models/User-model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../auth/user.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  public displayedColumns = ['prenom', 'nom','username','genre','type','telephone', 'adresse', 'details', 'update', 'delete'
];
public dataSource = new MatTableDataSource<User>();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log(this.getAllUsers());
  }
  getAllUsers = () => {
    this.userService.getData()
    
    .subscribe(res => {
      this.dataSource.data = res;
      console.log(this.dataSource.data );
    })
    console.log(this.userService.getData());
  }
  public redirectToDetails = (id: string) => {
    
  }
  public redirectToUpdate = (id: string) => {
    
  }
  public redirectToDelete = (id: string) => {
    
  }

}
