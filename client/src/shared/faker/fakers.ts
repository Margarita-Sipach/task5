import { Faker } from '@faker-js/faker';
import { Locales, Regions } from './locales';

type AppFaker = {
	[key in Regions]: Faker;
};

export const appFaker: AppFaker = Object.entries(Locales).reduce((acc, [key, val]) => ({
    ...acc,
    [key]: new Faker({ locale: val }),
}), {} as AppFaker);
