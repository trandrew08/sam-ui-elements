import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SamFormControlsModule } from '../form-controls';
import { SamDirectivesModule } from '../directives';
import { SamElementsModule } from '../elements';

import { AccordionsModule } from './accordion';
import { SamAlertComponent } from './alert';
import { SamAlertFooterComponent, SamAlertFooterService } from './alert-footer';
import { SamBadgeComponent } from './badge';
import { SamBannerComponent } from './banner';
import { SamBreadcrumbsComponent } from './breadcrumbs';
import { SamDownloadComponent } from './download';
import { SamHeaderComponent } from './header';
import { SamHistoryComponent } from './history';
import { SamLabelComponent } from './label';
import { SamModalComponent } from './modal';
import { SamMultiSelectDropdownComponent } from './multiselect-dropdown';
import { SamPaginationComponent } from './pagination';
import { SamPipesModule } from '../pipes';
import { SamPointOfContactComponent } from './point-of-contact';
import { SamProgress } from './progress-bar/progress-bar.component';
import { SamSidenavModule } from './sidenav';
import { SamSpinnerComponent } from './spinner';
import { SamTabsComponent, SamTabComponent } from './tabs';
import { SamUploadComponent } from './upload/upload.component';
import { SamWrapperModule } from '../wrappers';
import { SamCommentsModule } from './comments';
import { SamImageModule } from './image';
import { SamActionButton} from './actions/action-button';
import { SamActionsDropdownComponent } from './actions/actions-dropdown';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SamFormControlsModule,
    SamDirectivesModule,
    SamElementsModule,
    AccordionsModule,
    SamPipesModule,
    SamSidenavModule,
    SamWrapperModule,
    SamCommentsModule,
    SamImageModule,
  ],
  declarations: [
    SamAlertComponent,
    SamAlertFooterComponent,
    SamBadgeComponent,
    SamBannerComponent,
    SamBreadcrumbsComponent,
    SamDownloadComponent,
    SamHeaderComponent,
    SamHistoryComponent,
    SamLabelComponent,
    SamModalComponent,
    SamMultiSelectDropdownComponent,
    SamPaginationComponent,
    SamPointOfContactComponent,
    SamProgress,
    SamSpinnerComponent,
    SamTabsComponent,
    SamTabComponent,
    SamUploadComponent,
    SamActionButton,
    SamActionsDropdownComponent,
  ],
  exports: [
    SamActionButton,
    SamActionsDropdownComponent,
    SamAlertComponent,
    SamAlertFooterComponent,
    SamBadgeComponent,
    SamBannerComponent,
    SamBreadcrumbsComponent,
    SamDownloadComponent,
    SamHeaderComponent,
    SamHistoryComponent,
    SamLabelComponent,
    SamModalComponent,
    SamMultiSelectDropdownComponent,
    SamPaginationComponent,
    SamPointOfContactComponent,
    SamProgress,
    SamSidenavModule,
    SamSpinnerComponent,
    SamTabsComponent,
    SamTabComponent,
    SamUploadComponent,
    AccordionsModule,
    SamCommentsModule,
    SamImageModule,
  ]
})
export class SamComponentsModule {}
