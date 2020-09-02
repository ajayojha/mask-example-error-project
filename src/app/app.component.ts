import { Component } from '@angular/core';
import { FormGroup,FormBuilder } from "@angular/forms"
import { RxwebValidators} from "@rxweb/reactive-form-validators"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userFormGroup: FormGroup

	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userFormGroup = this.formBuilder.group({
            phoneNumber:['', [RxwebValidators.mask({mask:'**:**:**:**:**:**',valueWithMask:true }),RxwebValidators.mac()]], 
        });
    }
}
