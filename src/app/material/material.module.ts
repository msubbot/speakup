import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule
} from "@angular/material";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTabsModule } from "@angular/material/tabs";
import { MatStepperModule } from "@angular/material/stepper";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatRadioModule } from "@angular/material/radio";
import { MatExpansionModule } from "@angular/material/expansion";

@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatTabsModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        MatGridListModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatExpansionModule,
        MatCardModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatTabsModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        MatGridListModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatExpansionModule,
        MatCardModule
    ]
})
export class MaterialModule {}
