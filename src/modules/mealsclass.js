export class Meals {
  constructor(id, name, image, likes = 0, description) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.likes = likes;
    this.description = description;
  }

  set likesChanger(value) {
    this.likes = value;
  }
}
