const panoImage = document.querySelector('.pano-image');
const miamiPano = '../images/pano1.jpg';

const panorama = new PANOLENS.ImagePanorama(miamiPano);
const viewer = new PANOLENS.viewer({
    container: panoImage
});
viewer.add(panorama);