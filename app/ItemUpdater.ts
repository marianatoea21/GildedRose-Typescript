import { Item } from './gilded-rose';

export interface ItemUpdater {
    update(item: Item): void;
}
