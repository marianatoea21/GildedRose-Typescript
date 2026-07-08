import { Item } from './gilded-rose';
import { ItemUpdater } from './ItemUpdater';

export class BackstagePassUpdater implements ItemUpdater {
    update(item: Item) {
        item.sellIn--;

        if (item.quality < 50) {
            item.quality++;
        }

        if (item.quality < 50 && item.sellIn <= 10) {
            item.quality++;
        }

        if (item.quality < 50 && item.sellIn <= 5) {
            item.quality++;
        }

        if (item.sellIn < 0) {
            item.quality = 0;
        }
    };
}