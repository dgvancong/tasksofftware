import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalendarComponent } from './tasks/calendar/calendar.component';
import { FormComponent } from './tasks/form/form.component';
import { PagesComponent } from './tasks/pages/pages.component';
import { ProjectAddComponent } from './projects/project-add/project-add.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectViewsComponent } from './projects/project-views/project-views.component';
import { ReportsComponent } from './tasks/reports/reports.component';
import { SettingsComponent } from './tasks/settings/settings.component';
import { ShortcutsComponent } from './tasks/shortcuts/shortcuts.component';
import { SummaryComponent } from './tasks/summary/summary.component';
import { TimlineComponent } from './tasks/timline/timline.component';
import { ProjectComponent } from './project.component';
import { IssuesComponent } from './tasks/issues/issues.component';
import { AvatarComponent } from './tasks/avatar/avatar.component';
import { DashboardComponent } from './projects/dashboard/dashboard.component';


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
