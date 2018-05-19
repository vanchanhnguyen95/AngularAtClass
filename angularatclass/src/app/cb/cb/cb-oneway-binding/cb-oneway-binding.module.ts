import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbOnewayBindingComponent } from './cb-oneway-binding/cb-oneway-binding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  exports: [CbOnewayBindingComponent],
  declarations: [CbOnewayBindingComponent]
})
export class CbOnewayBindingModule { }
