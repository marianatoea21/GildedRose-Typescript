import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';
import * as fs from "fs";

// Add a master test here
describe("Golden Master", () => {
    it("should produce the same output for sellIn (after 4 days)", () => {
        let milk = new Item("Milk", 5, 8);
        let agedBrie = new Item("Aged Brie", 50, 25);
        let sulfuras = new Item("Sulfuras, Hand of Ragnaros", 70, 80);
        let backstagePasses = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 45);

        const items = new Array<Item>();
        items.push(milk);
        items.push(agedBrie);
        items.push(sulfuras);
        items.push(backstagePasses);

        const GildedRoseInn = new GildedRose(items);
        GildedRoseInn.updateQuality();
        GildedRoseInn.updateQuality();
        GildedRoseInn.updateQuality();
        GildedRoseInn.updateQuality();

        expect(GildedRoseInn.items[0].sellIn).to.equal(1); // after day 1
        expect(GildedRoseInn.items[1].sellIn).to.equal(46); // after day 2
        expect(GildedRoseInn.items[2].sellIn).to.equal(70); // after day 3
        expect(GildedRoseInn.items[3].sellIn).to.equal(6);  // after day 4

    })

    it("should produce the same output for quality (after 4 days)", () => {
        let milk = new Item("Milk", 5, 8);
        let agedBrie = new Item("Aged Brie", 50, 25);
        let sulfuras = new Item("Sulfuras, Hand of Ragnaros", 70, 80);
        let backstagePasses = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 45);

        const items = new Array<Item>();
        items.push(milk);
        items.push(agedBrie);
        items.push(sulfuras);
        items.push(backstagePasses);

        const GildedRoseInn = new GildedRose(items);
        GildedRoseInn.updateQuality();
        GildedRoseInn.updateQuality();
        GildedRoseInn.updateQuality();
        GildedRoseInn.updateQuality();

        expect(GildedRoseInn.items[0].quality).to.equal(4);
        expect(GildedRoseInn.items[1].quality).to.equal(29);
        expect(GildedRoseInn.items[2].quality).to.equal(80);
        expect(GildedRoseInn.items[3].quality).to.equal(50);

    })


    it("should produce the same output for quality (multiple days)", () => {
        // 1. Arrange
        let normalItem1 = new Item("Normal item 1", 20, 10);
        let normalItem2 = new Item("Normal item 2", 0, 25);
        let normalItem3 = new Item("Normal item 3", -1, 1);
        let normalItem4 = new Item("Normal item 3", 10, 0);
        let normalItem5 = new Item("Normal item 5", 10, 50);
        let agedBrie1 = new Item("Aged Brie", 10, 0);
        let agedBrie2 = new Item("Aged Brie", 10, 49);
        let agedBrie3 = new Item("Aged Brie", 10, 50);
        let sulfuras = new Item("Sulfuras, Hand of Ragnaros", 70, 80);
        let backstagePasses1 = new Item("Backstage passes to a TAFKAL80ETC concert", 15, 45);
        let backstagePasses2 = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 45);
        let backstagePasses3 = new Item("Backstage passes to a TAFKAL80ETC concert", -1, 45);
        let backstagePasses4 = new Item("Backstage passes to a TAFKAL80ETC concert", 1, 45);
        let backstagePasses5 = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 45);

        let items = new Array<Item>();
        items.push(normalItem1);
        items.push(normalItem2);
        items.push(normalItem3);
        items.push(normalItem4);
        items.push(normalItem5);
        items.push(agedBrie1);
        items.push(agedBrie2);
        items.push(agedBrie3);
        items.push(sulfuras);
        items.push(backstagePasses1);
        items.push(backstagePasses2);
        items.push(backstagePasses3);
        items.push(backstagePasses4);
        items.push(backstagePasses5);

        let GildedRoseInn = new GildedRose(items);

        // 2. Act
        let output =""
        for (let i = 0; i <= 20; i++) {

            output += `Day${i}\n`;

            //GildedRoseInn.updateQuality();
            //console.log("Day " + i);
            for (let j = 0; j < items.length; j++) {
                // console.log(items[j].name);
                // console.log("Sellin: " + items[j].sellIn);
                // console.log("Quality" + items[j].quality);
                // console.log("");
                output += `${items[j].name}\n`;
                output += `SellIn: ${items[j].sellIn}\n`;
                output += `Quality: ${items[j].quality}\n\n`;
            }
            GildedRoseInn.updateQuality();
        }

        //fs.writeFileSync("test/golden-master.txt", output);

        // 3. Compare
        const expectedOutput = fs.readFileSync("test/golden-master.txt", "utf8");
        expect(output).to.equal(expectedOutput);

    })
})