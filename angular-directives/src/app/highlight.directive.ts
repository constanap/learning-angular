import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({ selector: '[myHighlight]'})
export class HighlightDirective {
  
  // This sets myHighlight as alias por the property,
  // but the name is still highlightColor.
  @Input('myHighlight') highlightColor: string;
  
  @Input() defaultColor: string;
  
  constructor(private el: ElementRef) { }
  
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}