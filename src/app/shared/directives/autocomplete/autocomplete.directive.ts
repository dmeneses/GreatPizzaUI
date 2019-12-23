import { Directive, ElementRef, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Autocomplete } from 'materialize-css';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Directive({
  selector: '[appAutocomplete]'
})
export class AutocompleteDirective implements AfterViewInit {

  @Input() data;
  @Output() autocomplete = new EventEmitter<any>();
  autocompleteElement: Autocomplete;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.autocompleteElement = Autocomplete.init(this.elementRef.nativeElement, { 
      data: this.data, 
      onAutocomplete: (data) => this.autocomplete.emit(data)
    });
  }
}
