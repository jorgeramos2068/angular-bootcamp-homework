import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lazy-with-params',
  templateUrl: './lazy-with-params.component.html',
})
export class LazyWithParamsComponent implements OnInit, OnDestroy {
  protected title: string = 'Component with params';
  protected subtitle: string = 'Loaded with lazy loading';
  protected localParam: string = '1';
  private paramsSubscription!: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.paramsSubscription = this.activatedRoute.params.subscribe({
      next: ({ id }) => {
        this.localParam = id;
      },
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
