import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private auth: AuthService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
  return this.auth.user$.map(user => {
    if(user)
      return true;
    this.router.navigate(['login'], {'queryParams': { returnUrl: state.url}});
    return false;
  });
  }

}
