import { isNull } from '@angular/compiler/src/output/output_ast';
import { isDefined } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { isEmpty } from 'rxjs/operators';
import { PersonService } from 'src/app/services/person.service';

@Injectable({
  providedIn: 'root'
})
export class PersonCardGuard implements CanActivate {

  constructor(private router: Router, private personService: PersonService){ }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const id = route.paramMap.get('id');

      if(id?.length !== 24 ){
        alert('Invalid Person');
        this.router.navigate(['/people']);
        return false
      }
    return true;
  }
  
}
