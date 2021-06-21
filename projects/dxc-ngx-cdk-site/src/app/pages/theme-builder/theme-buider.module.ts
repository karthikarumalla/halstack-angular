import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ThemeBuilderModule } from "../../components/theme-builder/theme-builder.module";
import { ThemeBuilderComponentPage } from "./theme-builder.component";
import { ThemeBuilderPageRoutingModule } from "./theme-builder-routing.module";
import { AccordionPreviewComponent } from "./previews/accordion-preview/accordion-preview.component";
import {
  DxcAccordionModule,
  DxcAlertModule,
  DxcWizardModule,
  DxcButtonModule,
  DxcAccordionGroupModule,
  DxcBoxModule,
  DxcHeadingModule,
  DxcCardModule,
  DxcCheckboxModule,
  DxcChipModule,
  DxcDateModule,
  DxcDialogModule,
  DxcDropdownModule,
  DxcFooterModule,
  DxcHeaderModule,
  DxcInputTextModule,
  DxcLinkModule,
  DxcPaginatorModule,
  DxcProgressbarModule,
  DxcRadioModule,
  DxcSelectModule,
  DxcSideNavModule,
  DxcSliderModule,
  DxcSpinnerModule,
  DxcSwitchModule,
  DxcTagModule,
  DxcTableModule,
  DxcTabsModule,
  DxcTextareaModule,
  DxcToggleGroupModule,
  DxcUploadModule,
} from "@dxc-technology/halstack-angular";
import { AlertPreviewComponent } from "./previews/alert-preview/alert-preview.component";
import { WizardPreviewComponent } from "./previews/wizard-preview/wizard-preview.component";
import { BoxPreviewComponent } from './previews/box-preview/box-preview.component';
import { ButtonPreviewComponent } from './previews/button-preview/button-preview.component';
import { CardPreviewComponent } from './previews/card-preview/card-preview.component';
import { ThemeModule } from '../../../../../dxc-ngx-cdk/src/lib/theme/theme.module';
import { CheckboxPreviewComponent } from './previews/checkbox-preview/checkbox-preview.component';
import { ChipPreviewComponent } from './previews/chip-preview/chip-preview.component';
import { DatePreviewComponent } from './previews/date-preview/date-preview.component';
import { DialogPreviewComponent } from './previews/dialog-preview/dialog-preview.component';
import { DropdownPreviewComponent } from './previews/dropdown-preview/dropdown-preview.component';
import { FooterPreviewComponent } from './previews/footer-preview/footer-preview.component';
import { HeaderPreviewComponent } from './previews/header-preview/header-preview.component';
import { HeadingPreviewComponent } from './previews/heading-preview/heading-preview.component';
import { InputTextPreviewComponent } from './previews/input-text-preview/input-text-preview.component';
import { LinkPreviewComponent } from './previews/link-preview/link-preview.component';
import { PaginatorPreviewComponent } from './previews/paginator-preview/paginator-preview.component';
import { ProgressBarPreviewComponent } from './previews/progress-bar-preview/progress-bar-preview.component';
import { RadioPreviewComponent } from './previews/radio-preview/radio-preview.component';
import { TablePreviewComponent } from './previews/table-preview/table-preview.component';

@NgModule({
  declarations: [
    ThemeBuilderComponentPage,
    AccordionPreviewComponent,
    AlertPreviewComponent,
    WizardPreviewComponent,
    BoxPreviewComponent,
    ButtonPreviewComponent,
    CardPreviewComponent,
    CheckboxPreviewComponent,
    ChipPreviewComponent,
    DatePreviewComponent,
    DialogPreviewComponent,
    DropdownPreviewComponent,
    FooterPreviewComponent,
    HeaderPreviewComponent,
    HeadingPreviewComponent,
    InputTextPreviewComponent,
    LinkPreviewComponent,
    PaginatorPreviewComponent,
    ProgressBarPreviewComponent,
    RadioPreviewComponent,
    TablePreviewComponent,
  ],
  imports: [
    CommonModule,
    ThemeBuilderPageRoutingModule,
    ThemeBuilderModule,
    DxcAccordionModule,
    DxcAlertModule,
    DxcWizardModule,
    DxcButtonModule,
    DxcAccordionGroupModule,
    ThemeModule,
    DxcBoxModule,
    DxcHeadingModule,
    DxcCardModule,
    DxcCheckboxModule,
    DxcChipModule,
    DxcDateModule,
    DxcDialogModule,
    DxcDropdownModule,
    DxcFooterModule,
    DxcHeaderModule,
    DxcInputTextModule,
    DxcLinkModule,
    DxcPaginatorModule,
    DxcProgressbarModule,
    DxcRadioModule,
    DxcSelectModule,
    DxcSideNavModule,
    DxcSliderModule,
    DxcSpinnerModule,
    DxcSwitchModule,
    DxcTagModule,
    DxcTableModule,
    DxcTabsModule,
    DxcTextareaModule,
    DxcToggleGroupModule,
    DxcUploadModule
  ],
  exports: [],
  entryComponents: [],
})
export class ThemeBuilderPageModule {}
