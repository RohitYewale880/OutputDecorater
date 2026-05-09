import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { MatSnackBarModule } from "@angular/material/snack-bar";

let array = [MatCardModule, MatButtonModule, MatIconModule, MatCheckboxModule, MatSnackBarModule];

@NgModule({
    imports: [...array],
    exports: [...array]
})
export class MaterialModule {
    constructor() { }
}