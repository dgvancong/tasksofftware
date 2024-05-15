import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalendarComponent } from './tasks/calendar/calendar.component';
import { FormComponent } from './tasks/form/form.component';
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
import { IssuesComponent } from './tasks/issues/issues.component';
import { AvatarComponent } from './tasks/board/board.component';
import { DashboardComponent } from './manage-project/dashboard/dashboard.component';
import { SettingServiceComponent } from './setting/setting-service/setting-service.component';
import { ProjectNotificationComponent } from './manage-project/project-notification/project-notification.component';
import { ProjectTeamComponent } from './manage-project/project-team/project-team.component';
import { UserDetailsComponent } from './manage-project/user-details/user-details.component';


export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: ProjectComponent,
    children: [

      { path: 'dashboard', component: DashboardComponent },

      { path: 'project-add', component: ProjectAddComponent },

      { path: 'project-list', component: ProjectListComponent },

      { path: 'project-team', component: ProjectTeamComponent },

      { path: 'project-user', component: ProjectNotificationComponent },

      { path: 'project-user-details/:id', component: UserDetailsComponent },

      { path: 'project-view', component: ProjectViewsComponent },

      { path: 'work-timline', component: TimlineComponent },

      { path: 'work-summary/:id', component: SummaryComponent },

      { path: 'work-shortcuts/:id', component: ShortcutsComponent },

      { path: 'work-setting/:id', component: SettingsComponent },

      { path: 'work-report/:id', component: ReportsComponent },

      { path: 'work-pages/:id', component: PagesComponent },

      { path: 'work-issues/:id', component: IssuesComponent },

      { path: 'work-form/:id', component: FormComponent },

      { path: 'work-calendar/:id', component: CalendarComponent },

      { path: 'work-avatar/:id', component: AvatarComponent },

      { path:'setting', component:SettingServiceComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ProjectRoutingModule { }
