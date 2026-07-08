import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Conjured Mana Cake', function () {
    it ('decreases quality', function () {
        const gildedRose = new GildedRose([ new Item("Conjured Mana Cake", 20, 10) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(19);
        expect(items[0].quality).to.equal(8);
    })

    it('degrades twice after sell date', function() {
        const gildedRose = new GildedRose([ new Item("Conjured Mana Cake", 0, 25) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(21);
    });

    it('quality never becomes negative', function() {
        const gildedRose = new GildedRose([ new Item("Conjured Mana Cake", 10, 0) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(9);
        expect(items[0].quality).to.equal(0);
    });
})