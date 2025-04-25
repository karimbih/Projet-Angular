import { Directive, ElementRef, Input, Renderer2, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit {
  @Input() appHighlight: boolean = false;
  
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow'); // Exemple de couleur de surbrillance
    
    if (this.appHighlight) {
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
    }
  }
  // TODO 24: Modifier la directive pour que le texte soit en gras si l'input est true et appliquer cela au champ title du livre sur les pages book-detail et book-list
}
