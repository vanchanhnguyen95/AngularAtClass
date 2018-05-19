import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbPipeComponent } from './cb-pipe/cb-pipe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CbPipeComponent],
  declarations: [CbPipeComponent]
})
export class CbPipeModule { }
