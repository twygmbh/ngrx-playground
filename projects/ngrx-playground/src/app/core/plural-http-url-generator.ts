import {
    DefaultHttpUrlGenerator,
    HttpResourceUrls,
    normalizeRoot,
    Pluralizer,
} from '@ngrx/data';
import { Injectable } from '@angular/core';

@Injectable()
export class PluralHttpUrlGenerator extends DefaultHttpUrlGenerator {
    constructor(private pluralizzer: Pluralizer) {
        super(pluralizzer);
    }

    protected getResourceUrls(
        entityName: string,
        root: string
    ): HttpResourceUrls {
        let resourceUrls = this.knownHttpResourceUrls[entityName];
        if (!resourceUrls) {
            const nRoot = normalizeRoot(root);
            const url = `${nRoot}/${this.pluralizzer.pluralize(
                entityName
            )}/`.toLowerCase();
            resourceUrls = {
                entityResourceUrl: url,
                collectionResourceUrl: url,
            };
            this.registerHttpResourceUrls({ [entityName]: resourceUrls });
        }
        return resourceUrls;
    }
}
