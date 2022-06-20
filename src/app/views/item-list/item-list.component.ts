import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})

//OnInit is a totally optional interface, but is used SOLELY to make sure that we implement ngOnInit().
export class ItemListComponent implements OnInit {
  @Input() items: any = [];
  constructor() {
    console.log(this.items); //prints empty array
  }

  //lifecycle hook
  //called once after this component is first displayed on the screen and after angular has set any properties passed down from the parent component
  ngOnInit(): void {
    console.log(this.items); //prints the items passed from parent
  }

  //called anytime a property is changed, including when parent component passes down new data
  // ngOnChanges(): void {
  //   console.log(this.items); //prints the updated items passed from parent
  // }

  //called once when angular is about to remove this component
  // ngOnDestroy(): void {

  // }

}
