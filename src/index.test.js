import { expect } from 'chai';
import jsdom from "jsdom";
import fs from "fs";


describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe("index.html", () => {
  it("should say hello", () => {
    const index = fs.readFileSync("./src/index.html", "utf-8");
    const { JSDOM } = jsdom;
    console.log(JSDOM);
    const dom = new JSDOM(index);
    const h1 = dom.window.document.getElementsByTagName("h1")[0];
    expect(h1.innerHTML).to.equal("Hello World!");
    dom.window.close();
  });
});
