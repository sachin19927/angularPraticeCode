import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.scss']
})
export class FormDemoComponent implements OnInit {



  public ClientForm!: FormGroup;
  @Output() onSubmitChild= new EventEmitter<any>();

  constructor(public form: FormBuilder) { }

  ngOnInit(): void {

    this.ClientForm = this.form.group({
      name: ['', [Validators.required]],
      mtr_status: ['', [Validators.required]],
      mtr_type: ['', [Validators.required]],
      installedDate: [Date, [Validators.required ]],
      city: ['', [Validators.required, Validators.email]],
      state: ['', [Validators.required]],
      phoneNo: ['', [Validators.required]],
      pincode: ['', [Validators.required]],
    });
  }


  onSubmit()
  {
    console.log(this.ClientForm)
    this.onSubmitChild.emit(this.ClientForm.value)
  }

  
}
