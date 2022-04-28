import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faTwitter, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { TermsConditionsComponent } from '../terms-conditions/terms-conditions.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    
  }
  
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faDiscord = faDiscord;

  openDialog() {
    const dialogRef = this.dialog.open(TermsConditionsComponent, {  });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
