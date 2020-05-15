import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'input-component',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() placeholder: string = '';
  @Input() name: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
