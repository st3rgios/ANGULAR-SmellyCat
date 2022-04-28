import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ContactEmailService } from '../contact-email.service';
import { MatDialog } from '@angular/material/dialog';
import { TermsConditionsComponent } from '../terms-conditions/terms-conditions.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})


export class ContactComponent implements OnInit {
  
  myForm: FormGroup;
  disabledSubmitButton: boolean = true;

  constructor(private fb: FormBuilder, private mailsrv: ContactEmailService, public dialog: MatDialog) { 
    this.myForm = this.fb.group({
      'name': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'message': ['', Validators.required],
      'acceptTerms': [false, Validators.requiredTrue],
      'city': [''],
      'address': [''],
      'postalcode': [''],
    });
  }

  ngOnInit(): void {
    this.myForm.reset();
  }

  onSubmit() {
    this.mailsrv.PostMsg(this.myForm.value).subscribe({
      next: () => {
        alert('Your message has been sent!');
        this.myForm.reset();
        this.disabledSubmitButton = true;
      }, 
      error: (e) => {
        console.log('Error', e);
        alert('Mail server is busy.\n Please try again later.');
      }
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(TermsConditionsComponent, {  });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
  

