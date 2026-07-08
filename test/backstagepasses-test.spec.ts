import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Backstage Passes', function () {

    it('more than 10 days remaining', function() {
        const gildedRose = new GildedRose([ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 45) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(14);
        expect(items[0].quality).to.equal(46);
    });

    it('10 days or less', function() {
        const gildedRose = new GildedRose([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 45) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(9);
        expect(items[0].quality).to.equal(47);
    });

    it('5 days or less', function() {
        const gildedRose = new GildedRose([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 45) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(4);
        expect(items[0].quality).to.equal(48);
    });

    it('after concert', function() {
        const gildedRose = new GildedRose([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 45) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(0);
    });
});