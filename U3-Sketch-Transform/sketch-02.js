const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [1080, 1080]
};

/*
const degToRad = (degrees) => {
  return degrees / 180 * Math.PI;
}

const randomRange = (min, max) => {
  return Math.random() * (max - min) + min;
}
*/

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';
    context.strokeStyle = 'black';

    const cx = width * 0.5;
    const cy = height * 0.5;

    const w = width * 0.1;
    const h = height * 0.01;
    let x, y;

    let num = 32;
    let radius = width * 0.3;

    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      x = radius * Math.cos(angle);
      y = radius * Math.sin(angle);

      context.save();
      context.translate(cx, cy); // center (0,0)
      context.translate(x, y);
      context.rotate(angle);
      context.scale(random.range(0.2, 0.5), random.range(0.1, 2));

      context.beginPath();
      context.rect(random.range(0, -w * 0.5), -h * 0.5, w, h);
      context.fill();
      context.restore();

      context.save();
      context.translate(cx, cy);
      context.rotate(angle);

      context.lineWidth = random.range(5, 20);

      context.beginPath();
      context.arc(0, 0, radius * random.range(0.7, 1.3), slice * random.range(1, -4), slice * random.range(1, 3));
      context.stroke();
      context.restore();
    }

    num = 4.2;
    radius = width * 0.4;

    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      x = radius * Math.cos(angle);
      y = radius * Math.sin(angle);

      context.save();
      context.translate(cx, cy); // center (0,0)
      context.translate(x, y);
      context.rotate(angle);
      context.scale(1, 1);

      context.beginPath();
      context.rect(-w * 2, -h * 0.5, w * 3, h * 1.3);
      context.fill();
      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
