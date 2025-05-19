function ImageBlock({ src, alt }) {
  return <img src={src} alt={alt} style={{ maxWidth: '100%', margin: '1rem 0' }} />;
}
export default ImageBlock;