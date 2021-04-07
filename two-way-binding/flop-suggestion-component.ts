import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Suggestion } from './Suggestion';

@Component({
  templateUrl: './flop-suggestion.component.html'

})
export class FlopSuggestionComponent  {
  model:any = {}

  suggestions: Suggestion[] = [
    { id: 0, title: "Ender's Game", year: 2013, stars: 6.6 },
    { id: 1, title: "The Mummy", year: 2017, stars: 5.4 },
  ]

  constructor() { }

  ngOnInit() {
  }

  editSuggestion(suggestion) {
    this.model ={...suggestion};
  }

  updateSuggestion() {
    let editSuggestion = this.suggestions.find(curSuggestion => curSuggestion.id === this.model.id)
    editSuggestion.title = this.model.title;
    editSuggestion.year = this.model.year;
    editSuggestion.stars = this.model.stars;
     this.model={}
  }

  cancel() {
    this.model={}
  }

}
