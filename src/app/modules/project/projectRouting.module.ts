import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalendarComponent } from './calendar/calendar.component';
import { FormComponent } from './form/form.component';
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
import { IssuesComponent } from './issues/issues.component';
import { AvatarComponent } from './avatar/avatar.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: ProjectComponent,
    children: [

      { path: 'dashboard', component: DashboardComponent },

      { path: 'project-add', component: ProjectAddComponent },

      { path: 'project-list', component: ProjectListComponent },

      { path: 'project-view', component: ProjectViewsComponent },

      { path: 'work', component: WorkComponent },

      { path: 'work-timline', component: TimlineComponent },

      { path: 'work-summary', component: SummaryComponent },

      { path: 'work-shortcuts', component: ShortcutsComponent },

      { path: 'work-setting', component: SettingsComponent },

      { path: 'work-report', component: ReportsComponent },

      { path: 'work-pages', component: PagesComponent },

      { path: 'work-issues', component: IssuesComponent },

      { path: 'work-form', component: FormComponent },

      { path: 'work-calendar', component: CalendarComponent },

      { path: 'work-avatar', component: AvatarComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ProjectRoutingModule { }
