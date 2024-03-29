import React from 'react'
import * as THREE from 'three'

export default function ThreeJS() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500)
  camera.position.set(0,0,100)
  camera.lookAt(0,0,0);
  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement)

  const material = new THREE.MeshBasicMaterial({ color: 0x00ff })
  // const cube = new THREE.Mesh(geometry, material)
  const points = []
  points.push(new THREE.Vector3(-10,0,0))
  points.push( new THREE.Vector3( 0, 10, 0 ) );
  points.push( new THREE.Vector3( 10, 0, 0 ) );
  points.push( new THREE.Vector3( 0, -10, 0 ) );
  points.push( new THREE.Vector3( -10, 0, 0 ) );
  const geometry = new THREE.BufferGeometry().setFromPoints(points)
  const line = new THREE.Line(geometry,material)
  scene.add(line)  
  // // camera.position.z = 5
  renderer.render(scene,camera)

  // function animate() {
  //   requestAnimationFrame( animate );
  //   cube.rotation.x += 0.01
  //   cube.rotation.y += 0.01
  //   renderer.render( scene, camera );
  // }

  // animate()

  return (
    <div>ThreeJS</div>
  )
}
