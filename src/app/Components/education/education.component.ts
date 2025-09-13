import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  imports: [ReactiveFormsModule]
})
export class EducationComponent implements OnInit {
  @ViewChild('backToTopButton') backToTopButton!: ElementRef;
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Scroll animations
    this.setupScrollAnimations();

    // Back to top button
    this.setupBackToTopButton();
  }

  setupScrollAnimations(): void {
    const animateElements = () => {
      const elements = document.querySelectorAll('.contact-card, .contact-form-container, .header-decoration');
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (elementPosition < screenPosition) {
          element.classList.add('animate-in');
        }
      });
    };

    animateElements();
    window.addEventListener('scroll', animateElements);
  }

  setupBackToTopButton(): void {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        this.backToTopButton.nativeElement.classList.add('visible');
      } else {
        this.backToTopButton.nativeElement.classList.remove('visible');
      }
    });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      alert('Thank you for your message! I will get back to you soon.');
      this.contactForm.reset();
    }
  }
}