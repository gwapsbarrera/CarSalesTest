import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public pageTitle = 'Welcome';
  operations: any = ['create car', 'create boat', 'create bike'];

  constructor(private route:ActivatedRoute,
    private router:Router) { }
  
  onChangeOperation(e) {
    if(e.currentTarget.options.selectedIndex == 1) {
      this.router.navigate(['/car']);
    }
  }
}
