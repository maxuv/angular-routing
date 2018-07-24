import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './MainFrame/index/index.component';
import { HomeMainComponent } from './home/home-main/home-main.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

import { HomeIndexComponent } from './home/home-index/home-index.component';
import { DashboardComponent } from './home/homeSub/dashboard/dashboard.component';
import { BusinessComponent } from './home/homeSub/business/business.component';
import { QualityComponent } from './home/homeSub/quality/quality.component';
import { CostComponent } from './home/homeSub/cost/cost.component';

const appRoutes: Routes = [
    {path:'',component:IndexComponent,
        children: [
            {path:'', component:HomeIndexComponent},
            {path:'about', component:AboutComponent},
            {path:'service', component:ServiceComponent},
            {path:'blog', component:BlogComponent},
            {path:'contact', component:ContactComponent},
            {path:'home', component:HomeIndexComponent}
        ]    
},
    {path: 'home', component: HomeIndexComponent,
            children: [
          {path: '', component: DashboardComponent, outlet:'routerHome'},
          {path: 'business', component: BusinessComponent, outlet:'routerHome'},
          {path: 'quality', component: QualityComponent, outlet:'routerHome'},
          {path: 'cost', component: CostComponent, outlet:'routerHome'},
            ]
        }
];

export const routing = RouterModule.forRoot(appRoutes);
