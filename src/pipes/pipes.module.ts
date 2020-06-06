import { NgModule } from '@angular/core';
import { FilterNullValuesPipe, NoNullValuesPipe, NoNullObjectValuesPipe } from './no-null-values/no-null-values';
@NgModule({
	declarations: [FilterNullValuesPipe, NoNullObjectValuesPipe, NoNullValuesPipe],
	imports: [],
	exports: [FilterNullValuesPipe, NoNullObjectValuesPipe, NoNullValuesPipe]
})
export class PipesModule {}
