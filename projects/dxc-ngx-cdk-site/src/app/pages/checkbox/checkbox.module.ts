import { NgModule } from "@angular/core";
import { DxcCheckboxModule, DxcTableModule, DxcTagModule, DxcChipModule, DxcHeadingModule } from '@dxc-technology/halstack-angular';
import { CheckboxComponent } from './checkbox.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TabbedSectionModule } from '../../components/tabbed-section/tabbed-section.module';
import { ExampleViewerModule } from '../../components/example-viewer/example-viewer.module';
import { ExampleViewerComponent } from '../../components/example-viewer/example-viewer.component';
import { CheckboxExampleComponent } from '../../components/examples/checkbox/checkbox-example/checkbox-example.component';
import { CheckboxImportComponent } from '../../components/examples/checkbox/checkbox-import/checkbox-import.component';
import { ComponentsSidenavModule } from '../components-sidenav/components-sidenav.module';

import { CodePlaygroundModule } from '../../components/code-playground/code-playground.module';
import { CheckboxApiComponent } from '../../components/examples/checkbox/checkbox-api/checkbox-api.component';
import { CheckboxThemeComponent } from '../../components/examples/checkbox/checkbox-theme/checkbox-theme.component';
import { ColorPreviewModule } from '../../components/color-preview/color-preview.module';
import { CheckboxPropertiesComponent } from '../../components/examples/checkbox/properties/checkbox-properties/checkbox-properties.component';
@NgModule({
  declarations: [
    CheckboxComponent,
    CheckboxExampleComponent,
    CheckboxPropertiesComponent,
    CheckboxImportComponent,
    CheckboxApiComponent,
    CheckboxThemeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    DxcCheckboxModule,
    TabbedSectionModule,
    ExampleViewerModule,
    DxcTableModule,
    DxcTagModule,
    CodePlaygroundModule,
    ComponentsSidenavModule,
    ColorPreviewModule,
    DxcChipModule,
    DxcHeadingModule
  ],
  exports: [
    CheckboxComponent,
    CheckboxExampleComponent,
    CheckboxPropertiesComponent,
    CheckboxImportComponent,
    CheckboxApiComponent,
    CheckboxThemeComponent
  ],
  entryComponents: [
    ExampleViewerComponent
  ]
})
export class CheckboxModule { }
