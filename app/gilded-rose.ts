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

// function updateNormalItemQuality(item: Item) {
//     item.sellIn--;
//
//     if (item.quality > 0) {
//         item.quality--;
//     }
//
//     if (item.quality > 0 && item.sellIn < 0) {
//         item.quality--;
//     }
// }
//
// function updateAgedBrieQuality(item: Item) {
//     item.sellIn--;
//     if (item.quality < 50) {
//         item.quality++;
//     }
//
//     if (item.quality < 50 && item.sellIn < 0) {
//         item.quality++;
//     }
// }
//
// function updateBackstagePassQuality(item: Item ) {
//     item.sellIn--;
//
//     if (item.quality < 50) {
//         item.quality++;
//     }
//
//     if (item.quality < 50 && item.sellIn <= 10) {
//         item.quality++;
//     }
//
//     if (item.quality < 50 && item.sellIn <= 5) {
//         item.quality++;
//     }
//
//     if (item.sellIn < 0) {
//         item.quality = 0;
//     }
// }
//
// function updateConjuredManaCake(item: Item ) {
//     item.sellIn --;
//
//     if (item.quality > 1) {
//         item.quality -= 2;
//     }
//
//     if (item.quality > 1 && item.sellIn < 0) {
//         item.quality -= 2;
//     }
// }
