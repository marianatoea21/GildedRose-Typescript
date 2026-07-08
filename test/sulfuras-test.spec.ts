import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Sulfuras', function () {

    it('never changes', function() {
        const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 70, 80)]);

        for (let day = 0; day < 20; day++) {
            gildedRose.updateQuality();
        }

        const item = gildedRose.items[0];

        expect(item.sellIn).to.equal(70);
        expect(item.quality).to.equal(80);
    });
});