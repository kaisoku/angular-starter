import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'green';
  @HostBinding('style.backgroundColor') backgroundColor: string =
    this.defaultColor;

  constructor(private elRef: ElementRef, private render: Renderer2) {}

  ngOnInit(): void {
    /* this.render.setStyle(this.elRef.nativeElement, 'background-color', 'green'); */
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(evantData: Event) {
    /* this.render.setStyle(this.elRef.nativeElement, 'background-color', 'green'); */
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    /*  this.render.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'transparent'
    ); */
    this.backgroundColor = this.defaultColor;
  }
}
