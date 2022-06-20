import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter(); //parent component will watch for this event

  //ElementRef gives access to the host element, i.e. the app-modal element in this case
  constructor(private el: ElementRef) { }

  //lifecycle hook
  //called once after this component is first displayed on the screen
  //also called when any property is passed down from the parent component
  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.el.nativeElement.remove();
  }

  onCloseClick() {
    this.close.emit();
  }

}
