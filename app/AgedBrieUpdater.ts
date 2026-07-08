import { Item } from './gilded-rose';
import { ItemUpdater } from './ItemUpdater';

export class AgedBrieUpdater implements ItemUpdater {
    update(item: Item) {
        item.sellIn--;
        if (item.quality < 50) {
            item.quality++;
        }

        if (item.quality < 50 && item.sellIn < 0) {
            item.quality++;
        }
    };
}