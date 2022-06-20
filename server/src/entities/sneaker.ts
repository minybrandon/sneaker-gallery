class Sneaker {
  model: string;
  size: number;
  photoUrl?: string;

  constructor(model: string, size: number, photoUrl?: string) {
    this.model = model;
    this.size = size;
    this.photoUrl = photoUrl;
  }
}

export default Sneaker;
