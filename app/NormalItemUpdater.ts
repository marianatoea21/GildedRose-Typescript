import { Item } from './gilded-rose';
import { ItemUpdater } from './ItemUpdater';

export class NormalItemUpdater implements ItemUpdater {
    update(item: Item) {
        item.sellIn--;

        if (item.quality > 0) {
            item.quality--;
        }

        if (item.quality > 0 && item.sellIn < 0) {
            item.quality--;
        }
    };
}