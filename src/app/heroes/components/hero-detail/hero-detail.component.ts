import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/core/models/hero.model';
import { HeroService } from 'src/app/core/services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  hero!: Hero;

  form = this.fb.group({
    id: [{ value: '', disabled: true }],
    name: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private heroService: HeroService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe((hero) => {
      this.hero = hero;
      this.form.controls['id'].setValue(String(hero.id));
      this.form.controls['name'].setValue(hero.name);
    });
  }

  update() {
    const { valid, value } = this.form;

    const hero: Hero = {
      id: this.hero.id,
      name: value.name!,
    };

    this.heroService.update(hero);
  }

  goBack(): void {
    this.location.back();
  }
}
