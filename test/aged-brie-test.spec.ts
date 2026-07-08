import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Aged Brie', function () {

    it('increases quality', function() {
        const gildedRose = new GildedRose([ new Item("Aged Brie", 10, 49) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(9);
        expect(items[0].quality).to.equal(50);
    });

    it('never exceeds 50', function() {
        const gildedRose = new GildedRose([ new Item("Aged Brie", 10, 50) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(9);
        expect(items[0].quality).to.equal(50);
    });
});