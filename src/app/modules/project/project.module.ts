import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { ProjectRoutingModule } from './projectRouting.module';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzTableModule } from 'ng-zorro-antd/table';



// Components
import { AvatarComponent } from './avatar/avatar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FormComponent } from './form/form.component';
import { IssuesComponent } from './issues/issues.component';
import { PagesComponent } from './pages/pages.component';
import { ProjectAddComponent } from './project-add/project-add.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectViewsComponent } from './project-views/project-views.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { ShortcutsComponent } from './shortcuts/shortcuts.component';
import { SummaryComponent } from './summary/summary.component';
import { TimlineComponent } from './timline/timline.component';
import { WorkComponent } from './work/work.component';
import { ProjectComponent } from './project.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';



@NgModule({
  declarations: [
    AvatarComponent,
    CalendarComponent,
    FormComponent,
    IssuesComponent,
    PagesComponent,
    ProjectAddComponent,
    ProjectListComponent,
    ProjectViewsComponent,
    ReportsComponent,
    SettingsComponent,
    ShortcutsComponent,
    SummaryComponent,
    TimlineComponent,
    WorkComponent,
    ProjectComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzDropDownModule,
    NzAvatarModule,
    NzBadgeModule,
    NzModalModule,
    NzTabsModule,
    NzProgressModule,
    NzTableModule,
    NzDividerModule
  ],
  exports: [
    AvatarComponent,
    CalendarComponent,
    FormComponent,
    IssuesComponent,
    PagesComponent,
    ProjectAddComponent,
    ProjectListComponent,
    ProjectViewsComponent,
    ReportsComponent,
    SettingsComponent,
    ShortcutsComponent,
    SummaryComponent,
    TimlineComponent,
    WorkComponent,
    ProjectComponent,
    DashboardComponent
  ]
})
export class ProjectModule { }
