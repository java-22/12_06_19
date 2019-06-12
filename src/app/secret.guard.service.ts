import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class SecretGuardService implements CanActivate{

  constructor(private router: Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    let token = localStorage.getItem('token');
    if(token === null){
      this.router.navigate(['/security']);
      return false;
    }else{
      return true;
    }
  }

}
