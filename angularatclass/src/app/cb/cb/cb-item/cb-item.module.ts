import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbItemComponent } from './cb-item/cb-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CbItemComponent],
  declarations: [CbItemComponent]
})
export class CbItemModule { }
