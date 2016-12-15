import { BoxGeometry, MeshBasicMaterial, Mesh, Scene,
  PerspectiveCamera, WebGLRenderer } from 'three';

class Cube {
  constructor(size) {
    this.geometry = new BoxGeometry(size.width, size.height, size.depth);
    this.material = new MeshBasicMaterial({
      color: 0x00ff00
    });
    this.mesh = new Mesh(this.geometry, this.material);
  }
  update() {
    this.mesh.rotation.x += 0.1;
    this.mesh.rotation.y += 0.1;
  }

  getMesh() {
    return this.mesh;
  }
}

class Application {
  constructor() {
    this.objects = [];
    this.createScene();
  }

  createScene() {
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 2000);
    this.camera.position.z = 20;

    this.renderer = new WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    this.render();
  }

  render() {
    requestAnimationFrame(() => {
      this.render();
    });

    this.objects.forEach((object) => {
      object.update();
    });

    this.renderer.render(this.scene, this.camera);
  }

  add(mesh) {
    this.objects.push(mesh);
    this.scene.add(mesh.getMesh());
  }
}

const app = new Application();
app.add(new Cube({
  width: 10,
  height: 10,
  depth: 10
}));

export default app;
