import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>404; Page not found</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
        aspernatur tempora quisquam. Culpa voluptate consequuntur non nisi minus
        atque officiis minima! Voluptates quis at sunt, fugit illo distinctio
        perspiciatis animi!
      </mat-card-content>
      <mat-card-actions>
        <button
          mat-raised-button
          color="primary"
          [routerLink]="['/']"
          routerLinkActive="router-link-active"
        >
          Take me home
        </button>
      </mat-card-actions>
    </mat-card>
  `,
})
export class PageNotFoundComponent {}
