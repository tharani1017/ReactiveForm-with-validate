import { Component, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  contactform=new FormGroup({
    
     firstName:new FormControl('',[Validators.required,Validators.minLength(5)]),  //default string
     lastName:new FormControl( 
       {
       value:"BK",     
        disabled:false     // 'true'hide last name --'false' edit option lastname
      },[Validators.required,Validators.maxLength(15),Validators.pattern("^[a-zA-Z]+$")]
     ),
    email:new FormControl("",[Validators.required]),
    gender:new FormControl(),
    country:new FormControl("",[Validators.required]),
    address:new FormGroup({
      city:new FormControl("",[Validators.required]),
      street:new FormControl("",[Validators.required]),
      pincode:new FormControl("",[Validators.required])

    })

   })

   get firstName() {
    return this.contactform.get('firstName');
  }
  get lastName() {
    return this.contactform.get('lastName');
  }
  get email() {
    return this.contactform.get('email');
  }
  get country() {
    return this.contactform.get('country');
  }
  get city() {
    return this.contactform.get('address')?.get('city');
  }
  get street() {
    return this.contactform.get('address')?.get('street');
  }
  get pincode() {
    return this.contactform.get('address')?.get('pincode');
  }
  

  
      onSubmit(){
        console.log(this.contactform.value);
      }
      
  
}
