import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicLight]',
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef) {}

  ngOnInit() {
    this.elRef.nativeElement.style.backgroundColor = 'blue';
  }
}
