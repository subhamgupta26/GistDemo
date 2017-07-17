import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { DiseaseService } from "app/disease.service";
import {Router} from '@angular/router'
import { Disease } from "app/disease";



@Component({
  selector: 'app-create-disease',
  templateUrl: './create-disease.component.html',
  styleUrls: ['./create-disease.component.css']
})
export class CreateDiseaseComponent implements OnInit {

     public myForm: FormGroup;
     public router:Router;
     public diseaseService:DiseaseService;
     

    constructor(private _fb: FormBuilder, diseaseService:DiseaseService, router: Router) { 

        this.router=router;
        this.diseaseService=diseaseService;
    }

    ngOnInit() {
        this.myForm = this._fb.group({
            title: ['', [Validators.required, Validators.minLength(5)]],
            
            fields: this._fb.array([
                this.initFields(),
            ])
        });
    }

    initFields() {
        return this._fb.group({
            name: ['', Validators.required],
       
        });
    }

    addFields() {
        const control = <FormArray>this.myForm.controls['fields'];
        control.push(this.initFields());
    }

    removeFields(i: number) {
        const control = <FormArray>this.myForm.controls['fields'];
        control.removeAt(i);
    }

    save(myForm) {
     
         console.log(this.myForm.value);
            this.diseaseService.addDisease(this.myForm.value).subscribe(data => {
      if(data.success){
        
        console.log(data);
    //     console.log("hi");
      


      } else {
          console.log("something went wrong"+data)
       }

  console.log(data);
    });
    
    console.log("subham");
    alert("Saved");
   // window.location.reload();
    // this.diseaseService.addDisease(this.myForm.value);
    }

}
