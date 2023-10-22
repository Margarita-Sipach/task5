import { de, ru, en } from '@faker-js/faker';

export enum Regions{
	'USA' = 'en',
	'Germany' = 'de',
	'Russian' = 'ru'
}

export const Locales = {
    [Regions.USA]: en,
    [Regions.Germany]: de,
    [Regions.Russian]: ru,
};
