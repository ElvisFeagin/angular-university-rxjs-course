import { Component, OnInit } from '@angular/core';
import { of, Observable, interval } from 'rxjs';
import { concat } from 'rxjs';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  ngOnInit() {
    const source1$ = interval(1000);
    const source2$ = of(4, 5, 6);
    const source3$ = of(7, 8, 9);
    const result$ = concat(source1$, source2$, source3$);
    result$.subscribe(console.log);
  }
}
