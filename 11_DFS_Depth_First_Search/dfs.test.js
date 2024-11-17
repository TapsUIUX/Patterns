const rangeSumBST = require("./938_rangeSumBST");
const isSymetric = require("./101symetricTree");

describe("DFS Test", () => {
  it("should cal range sun bst ", () => {
    let root = {
      val: 10,
      left: {
        val: 5,
        left: {
          val: 3,
          left: null,
          right: null,
        },
        right: {
          val: 7,
          left: null,
          right: null,
        },
      },
      right: {
        val: 15,
        left: null,
        right: {
          val: 18,
          left: null,
          right: null,
        },
      },
    };
    expect(rangeSumBST(root, 7, 15)).toBe(32);
  });

  it("shot return check symetric", () => {
    let root = {
      val: 1,
      left: {
        val: 2,
        left: {
          val: 3,
          left: null,
          right: null,
        },
        right: {
          val: 4,
          left: null,
          right: null,
        },
      },
      right: {
        val: 2,
        left: {
          val: 4,
          left: null,
          right: null,
        },
        right: {
          val: 3,
          left: null,
          right: null,
        },
      },
    };
    expect(isSymetric(root)).toBeTruthy();
  });
});
