import { RepositoryActionOptions } from '@ngxs-labs/data/typings';

export const REPOSITORY_ACTION_OPTIONS: RepositoryActionOptions = {
    type: null,
    cancelUncompleted: true,
    async: false,
    debounce: 200
};
