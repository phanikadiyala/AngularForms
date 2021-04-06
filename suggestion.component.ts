import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  templateUrl: './flop-suggestion.component.html'

})
export class FlopSuggestionComponent  {

  suggestions = []

  constructor() {

  }

  ngOnInit() {
  }

  addSuggestion(suggestion) {
    this.suggestions.push(suggestion);
  }

suggestion(formVal){
console.log(formVal);
}

}
