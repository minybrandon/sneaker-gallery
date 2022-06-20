import Sneaker from "./sneaker";

describe("Sneaker", () => {
  const model = "Sketchers";
  const size = 8;
  it("should create a sneaker", () => {
    const sneaker = new Sneaker(model, size);

    expect(sneaker).toBeDefined();
  });

  it("should get my sneaker info", () => {
    //precondition
    const photoUrl = "http://www.validsneakerurl.com";

    //action
    //create sneaker
    const sneaker = new Sneaker(model, size, photoUrl);

    //postcondition
    expect(sneaker.model).toEqual(model);
    expect(sneaker.size).toEqual(size);
    expect(sneaker.photoUrl).toEqual(photoUrl);
  });
});
