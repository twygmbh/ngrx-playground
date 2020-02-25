import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
    User: {},
};

const pluralNames = {
    User: 'Users',
};

export const entityConfig: EntityDataModuleConfig = {
    entityMetadata,
    pluralNames,
};
