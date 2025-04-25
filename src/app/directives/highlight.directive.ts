import { Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() appHighlight: boolean = false;
  
  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.appHighlight) {
      this.el.nativeElement.style.fontWeight = 'bold';
    }
  }
  // TODO 24: Modifier la directive pour que le texte soit en gras si l'input est true et appliquer cela au champ title du livre sur les pages book-detail et book-list
}
