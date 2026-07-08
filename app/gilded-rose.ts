import {MainUpdater} from "./MainUpdater";

export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (const item of this.items) {
            const updater = MainUpdater.getUpdater(item.name);
            if (updater) {
                updater.update(item);
            }
        }

        return this.items;
    }
}

