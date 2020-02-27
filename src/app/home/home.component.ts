import { Component,Input,AfterViewInit,AfterViewChecked, AfterContentChecked, AfterContentInit, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent  {
  @Input() names: string;
  named = 'Check For ngAfterViewChecked';
    @ViewChild("content",{static:true}) contentWrapper: ElementRef;
    content = "";
    @Output() public readonly contentChanged = new EventEmitter<string>();

    ngAfterContentInit(): void {
        this.content = this.contentWrapper.nativeElement.innerHTML;
        this.contentChanged.emit(this.content);
    }
    ngAfterContentChecked(): void {
        const c = this.contentWrapper.nativeElement.innerHTML;
        if (c !== this.content) {
            this.content = c;
            this.contentChanged.emit(this.content);
        }
    }
}