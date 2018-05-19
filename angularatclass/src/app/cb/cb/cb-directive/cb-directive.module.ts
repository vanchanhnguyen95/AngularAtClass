import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbDirectiveComponent } from './cb-directive/cb-directive.component';
import { CbItemModule } from '../cb-item/cb-item.module';

@NgModule({
  imports: [
    CommonModule, CbItemModule
  ],
  exports: [CbDirectiveComponent],
  declarations: [CbDirectiveComponent]
})
export class CbDirectiveModule { }
