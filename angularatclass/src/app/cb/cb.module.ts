import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbComponent } from './cb/cb.component';
import { CbDirectiveModule } from './cb/cb-directive/cb-directive.module';
import { CbOnewayBindingModule } from './cb/cb-oneway-binding/cb-oneway-binding.module';
import { CbPipeModule } from './cb/cb-pipe/cb-pipe.module';

@NgModule({
  imports: [
    CommonModule,CbDirectiveModule,CbOnewayBindingModule,CbPipeModule
  ],
  exports: [CbComponent],
  declarations: [CbComponent]
})
export class CbModule { }
