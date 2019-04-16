import { NgModule } from "@angular/core";
import {
    MatButtonModule,MatMenuModule,MatRippleModule,MatListModule,MatCardModule,MatInputModule,MatNativeDateModule,MatDatepickerModule,
    MatFormFieldModule,MatBadgeModule,MatIconModule,MatToolbarModule,MatSelectModule,MatTabsModule,MatSidenavModule
} from '@angular/material';





const MatModule = [
    MatIconModule,MatToolbarModule,MatBadgeModule,MatButtonModule,MatMenuModule,MatRippleModule,MatListModule,MatCardModule,MatFormFieldModule,
    MatInputModule,MatDatepickerModule,MatNativeDateModule,MatSelectModule,MatTabsModule,MatSidenavModule
];

@NgModule({

    declarations:[],
    imports:[MatModule],
    exports:[MatModule],
    providers:[]
})
export class MaterialModule{

}
