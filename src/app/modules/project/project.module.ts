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
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzCommentModule } from 'ng-zorro-antd/comment';


// Components
import { AvatarComponent } from './tasks/board/board.component';
import { CalendarComponent } from './tasks/calendar/calendar.component';
import { FormComponent } from './tasks/form/form.component';
import { IssuesComponent } from './tasks/issues/issues.component';
import { PagesComponent } from './tasks/pages/pages.component';
import { ProjectAddComponent } from './manage-project/project-add/project-add.component';
import { ProjectListComponent } from './manage-project/project-list/project-list.component';
import { ProjectViewsComponent } from './manage-project/project-views/project-views.component';
import { ReportsComponent } from './tasks/reports/reports.component';
import { SettingsComponent } from './tasks/settings/settings.component';
import { ShortcutsComponent } from './tasks/shortcuts/shortcuts.component';
import { SummaryComponent } from './tasks/summary/summary.component';
import { TimlineComponent } from './tasks/timline/timline.component';
import { ProjectComponent } from './project.component';
import { DashboardComponent } from './manage-project/dashboard/dashboard.component';
import { ProjectMesComponent } from './manage-project/project-mes/project-mes.component';
import { ProjectNotificationComponent } from './manage-project/project-notification/project-notification.component';
import { ProjectSettingComponent } from './manage-project/project-setting/project-setting.component';
import  { ProjectTeamComponent } from './manage-project/project-team/project-team.component';
import { ProjectProfileComponent } from './manage-project/project-profile/project-profile.component';
import { ProjectStatisComponent } from './manage-project/project-statis/project-statis.component';
import { SettingServiceComponent } from './setting/setting-service/setting-service.component';
import { ListComponent } from './tasks/list/list.component';
import { UserDetailsComponent } from './manage-project/user-details/user-details.component';








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
    ProjectComponent,
    DashboardComponent,
    ProjectMesComponent,
    ProjectSettingComponent,
    ProjectNotificationComponent,
    ProjectTeamComponent,
    ProjectProfileComponent,
    ProjectStatisComponent,
    SettingServiceComponent,
    ListComponent,
    UserDetailsComponent
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
    NzDividerModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NzPaginationModule,
    NzInputModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzCalendarModule,
    NzMessageModule,
    NzSelectModule,
    NzUploadModule,
    NzCommentModule

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
    ProjectComponent,
    DashboardComponent,
    ProjectMesComponent,
    ProjectSettingComponent,
    ProjectNotificationComponent,
    ProjectTeamComponent,
    ProjectProfileComponent,
    ProjectStatisComponent,
    UserDetailsComponent,
    SettingServiceComponent,
    ListComponent
  ]
})
export class ProjectModule { }
