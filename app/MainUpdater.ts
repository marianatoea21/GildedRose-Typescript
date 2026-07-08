 import { ConjuredManaCakeUpdater } from './ConjuredManaCakeUpdater';
 import { NormalItemUpdater } from './NormalItemUpdater';
 import { AgedBrieUpdater } from './AgedBrieUpdater';
 import { BackstagePassUpdater } from './BackstagePassUpdater';
 import { SulfurasUpdater } from './SulfurasUpdater';
 import {ItemUpdater} from "./ItemUpdater";

 export class MainUpdater {
     static getUpdater(itemName: string): ItemUpdater {
         switch (itemName) {
             case "Aged Brie":
                 return new AgedBrieUpdater();
             case "Sulfuras, Hand of Ragnaros":
                 return new SulfurasUpdater();
             case "Backstage passes to a TAFKAL80ETC concert":
                 return new BackstagePassUpdater();
             case "Conjured Mana Cake":
                 return new ConjuredManaCakeUpdater();
             default:
                 return new NormalItemUpdater();
         }
     }
 }