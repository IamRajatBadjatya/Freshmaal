import { Component, OnInit, AnimationKeyframe } from '@angular/core';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor(private auth: AuthService) { 
  }
  logout(){
    this.auth.logout();
  }
}
