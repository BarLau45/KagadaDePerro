import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-make-post',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './make-post.component.html',
  styleUrl: './make-post.component.css'
})
export class MakePostComponent {
  postText: string = '';

  post(): void {
    
  }
}
