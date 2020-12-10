import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tail-wind',
  templateUrl: './tail-wind.component.html',
  styleUrls: ['./tail-wind.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TailWindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
