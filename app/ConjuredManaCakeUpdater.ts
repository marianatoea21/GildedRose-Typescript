import { Item } from './gilded-rose';
import { ItemUpdater } from './ItemUpdater';

export class ConjuredManaCakeUpdater implements ItemUpdater {
    update(item: Item) {
        item.sellIn --;

        if (item.quality > 1) {
            item.quality -= 2;
        }

        if (item.quality > 1 && item.sellIn < 0) {
            item.quality -= 2;
        }
    };
}