import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-loading-screem',
  templateUrl: './loading-screem.component.html',
  styleUrls: ['./loading-screem.component.scss']
})
export class LoadingScreemComponent {
  @Input() coupleTitle = '';
  @Input() subtitle = '';
  @Input() isClosing = false;

  @Output() open = new EventEmitter<void>();

  onOpenClick(): void {
    this.open.emit();
  }
}
