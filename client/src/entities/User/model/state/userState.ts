import { makeAutoObservable } from 'mobx';
import { appFaker } from 'shared/faker/fakers';
import { Regions } from 'shared/faker/locales';
import { User } from '../types/User';

class UserState {
    users: User[] = [];

    seed: number = 123;

    errors: number = 0;

    region: Regions = Regions.Germany;

    faker = appFaker[this.region];

    constructor() {
        makeAutoObservable(this);
        this.updateFaker();
    }

    setRegion(region: Regions) {
        this.region = region;
        this.updateFaker();
    }

    setSeed(seed: number) {
        this.seed = seed;
        this.updateFaker();
    }

    updateFaker() {
        this.faker = appFaker[this.region];
        this.faker.seed(this.seed);
        this.updateUsers();
    }

    updateUsers() {
        const { faker } = this;
        this.users = new Array(20).fill('').map((_) => ({
            userId: faker.string.uuid(),
            fullName: faker.person.fullName(),
            address: faker.address.streetAddress(),
            phone: faker.phone.number(),
        }));
    }
}

export const userState = new UserState();
