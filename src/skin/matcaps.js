import * as THREE from 'three'
// Texture
export const textureLoader = new THREE.TextureLoader()

export const magmaTexture = textureLoader.load(process.env.MATCAPS_ROOT +'magma.png')
magmaTexture.generateMipmaps = false
magmaTexture.minFilter = THREE.NearestFilter

export const redblueTexture = textureLoader.load(process.env.MATCAPS_ROOT +'redblue.png')
redblueTexture.generateMipmaps = false
redblueTexture.minFilter = THREE.NearestFilter

export const eggTexture = textureLoader.load(process.env.MATCAPS_ROOT +'egg.png')
eggTexture.generateMipmaps = false
eggTexture.minFilter = THREE.NearestFilter

export const greenWhiteStoneTexture = textureLoader.load(process.env.MATCAPS_ROOT +'green_white_stone.png')
greenWhiteStoneTexture.generateMipmaps = false
greenWhiteStoneTexture.minFilter = THREE.NearestFilter

export const peachTexture = textureLoader.load(process.env.MATCAPS_ROOT +'peach.png')
peachTexture.generateMipmaps = false
peachTexture.minFilter = THREE.NearestFilter

export const knotMatcapsTexture = textureLoader.load(process.env.MATCAPS_ROOT +'balloon_pink.png')
knotMatcapsTexture.generateMipmaps = false
knotMatcapsTexture.minFilter = THREE.NearestFilter

export const whiteRedMatcapsTexture = textureLoader.load(process.env.MATCAPS_ROOT +'white_red.png')
whiteRedMatcapsTexture.generateMipmaps = false
whiteRedMatcapsTexture.minFilter = THREE.NearestFilter

export const yellowCandyMatcapsTexture = textureLoader.load(process.env.MATCAPS_ROOT +'yellow_candy.png')
yellowCandyMatcapsTexture.generateMipmaps = false
yellowCandyMatcapsTexture.minFilter = THREE.NearestFilter

export const bubbleMatcapsTexture = textureLoader.load(process.env.MATCAPS_ROOT +'bubble.png')
bubbleMatcapsTexture.generateMipmaps = false
bubbleMatcapsTexture.minFilter = THREE.NearestFilter

export const shiningMetalMatcapsTexture = textureLoader.load(process.env.MATCAPS_ROOT +'shining_metal.png')
shiningMetalMatcapsTexture.generateMipmaps = false
shiningMetalMatcapsTexture.minFilter = THREE.NearestFilter

export const skyMatcapsTexture = textureLoader.load(process.env.MATCAPS_ROOT +'sky.png')
skyMatcapsTexture.generateMipmaps = false
skyMatcapsTexture.minFilter = THREE.NearestFilter
// Textures
export const matCapsTextureArr = [
	whiteRedMatcapsTexture,
    magmaTexture,    
    eggTexture,
    redblueTexture,
    greenWhiteStoneTexture,
    peachTexture,
	shiningMetalMatcapsTexture,
	bubbleMatcapsTexture,
	yellowCandyMatcapsTexture,
	skyMatcapsTexture
]