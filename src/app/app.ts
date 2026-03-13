import { Component, signal, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Experience } from './components/experience/experience';
import { Education } from './components/education/education';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Hero, About, Skills, Projects, Experience, Education, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit {
  protected readonly title = signal('portfolio');

  ngAfterViewInit() {
    this.initScrollAnimations();
  }

  private initScrollAnimations() {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-up');
    revealElements.forEach(el => observer.observe(el));
  }
}
