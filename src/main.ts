import 'zone.js/dist/zone';
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { MutationObserverModule } from '@ng-web-apis/mutation-observer';
import { finalize, fromEvent, timer } from 'rxjs';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, MutationObserverModule],
  template: `
  <div
  subtree
  childList
  characterData
  attributeFilter="h1, aria-label"
  (waMutationObserver)="onMutation($event,eiei)">
    <h1
    #eiei
    id="jubH1"
    [attr.name]="'ttt'"
    >
    {{jubjub}}
    </h1>
    </div>
    <button (click)="onChange()">
  testja
    </button>
  `,
})
export class App {
  jubjub = 'jubJa';
  name = 'Angular';

  onChange() {
    this.jubjub = this.jubjub === 'jaJub' ? 'jubJa' : 'jaJub';
  }

  ngOnInit() {
    const x = document.querySelector('#jubH1');
    fromEvent(x, 'animationend').subscribe(() => {
      console.log('endJa');
      x.classList.remove('krapib');
    });
  }
  onMutation(e: MutationRecord[], eiei: HTMLElement) {
    eiei.classList.add('krapib');
  }
}

bootstrapApplication(App);
