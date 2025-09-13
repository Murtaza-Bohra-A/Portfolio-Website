import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  @ViewChild('backToTopButton') backToTopButton!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
  //   this.setupSmoothScrolling();
  //   this.setupBackToTopButton();
  //   this.setupProjectCardAnimations();
  // }

  // setupSmoothScrolling(): void {
  //   const anchors = document.querySelectorAll('a[href^="#"]');
  //   anchors.forEach(anchor => {
  //     this.renderer.listen(anchor, 'click', (event: Event) => {
  //       event.preventDefault();
  //       const targetId = (anchor as HTMLAnchorElement).getAttribute('href');
  //       const targetElement = document.querySelector(targetId!);
  //       if (targetElement) {
  //         targetElement.scrollIntoView({ behavior: 'smooth' });
  //       }
  //     });
  //   });
  // }

  // setupBackToTopButton(): void {
  //   this.renderer.listen(window, 'scroll', () => {
  //     if (window.pageYOffset > 300) {
  //       this.renderer.addClass(this.backToTopButton.nativeElement, 'visible');
  //     } else {
  //       this.renderer.removeClass(this.backToTopButton.nativeElement, 'visible');
  //     }
  //   });

  //   this.renderer.listen(this.backToTopButton.nativeElement, 'click', () => {
  //     window.scrollTo({ top: 0, behavior: 'smooth' });
  //   });
  // }

  // setupProjectCardAnimations(): void {
  //   const animateCards = () => {
  //     const cards = document.querySelectorAll('.project-card');
  //     cards.forEach(card => {
  //       const cardPosition = card.getBoundingClientRect().top;
  //       const screenPosition = window.innerHeight / 1.3;

  //       if (cardPosition < screenPosition) {
  //         this.renderer.addClass(card, 'visible');
  //       }
  //     });
  //   };

  //   animateCards();
  //   this.renderer.listen(window, 'scroll', animateCards);
  }
}