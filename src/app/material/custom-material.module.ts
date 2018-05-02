import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule
  ],
  declarations: [],
  entryComponents: [],
  exports: [
    MatButtonModule,
    MatInputModule
  ],
  providers: []
})
export class CustomMaterialModule { }
