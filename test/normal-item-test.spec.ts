import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Normal Item', function () {

    it('decreases quality', function() {
        const gildedRose = new GildedRose([ new Item("Normal item 1", 20, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(19);
        expect(items[0].quality).to.equal(9);
    });

    it('degrades twice after sell date', function() {
        const gildedRose = new GildedRose([ new Item("Normal item 2", 0, 25) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(23);
    });

    it('quality never becomes negative', function() {
        const gildedRose = new GildedRose([ new Item("Normal item 3", 10, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(9);
        expect(items[0].quality).to.equal(0);
    });
});