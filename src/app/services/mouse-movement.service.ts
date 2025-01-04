import { Injectable, HostListener } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MouseMovementService {
  mouseX: number = 0;
  mouseY: number = 0;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }
}
