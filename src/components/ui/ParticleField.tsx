import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function ParticleField() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 1000)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    const count = 900
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8
    }
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const material = new THREE.PointsMaterial({
      size: 0.028,
      color: new THREE.Color('#6ea8ff'),
      transparent: true,
      opacity: 0.75,
      sizeAttenuation: true,
    })
    const points = new THREE.Points(geometry, material)
    scene.add(points)

    // A few connective "route line" arcs to nod to the journey/travel-mapping motif.
    const lineMaterial = new THREE.LineBasicMaterial({ color: '#a855f7', transparent: true, opacity: 0.25 })
    for (let i = 0; i < 6; i++) {
      const start = new THREE.Vector3((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 5, (Math.random() - 0.5) * 4)
      const end = new THREE.Vector3((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 5, (Math.random() - 0.5) * 4)
      const mid = start.clone().lerp(end, 0.5).add(new THREE.Vector3(0, 1.2, 0))
      const curve = new THREE.QuadraticBezierCurve3(start, mid, end)
      const lineGeo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(40))
      scene.add(new THREE.Line(lineGeo, lineMaterial))
    }

    let frameId: number
    let mouseX = 0
    let mouseY = 0
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.4
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.4
    }
    window.addEventListener('mousemove', onMouseMove)

    const animate = () => {
      if (!prefersReducedMotion) {
        points.rotation.y += 0.0009
        points.rotation.x += 0.0002
        camera.position.x += (mouseX - camera.position.x) * 0.02
        camera.position.y += (-mouseY - camera.position.y) * 0.02
        camera.lookAt(scene.position)
      }
      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }
    animate()

    const onResize = () => {
      if (!mount) return
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouseMove)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0 -z-10" aria-hidden="true" />
}
