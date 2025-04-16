import { Component, OnInit } from '@angular/core';
import { menuList } from './jsonData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent implements OnInit{

  activeIndex:any=0;
  menuList:any;

  ngOnInit(): void {
    this.setValues()
  }
  
  setValues(){
    this.menuList = menuList;
  }

  setMenuIndex(selectedIndex:any){
    this.activeIndex = selectedIndex;
  }
}
