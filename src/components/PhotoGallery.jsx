export default function PhotoGallery({ photo }) {
  return (
    <div className="w-full">
      <img
        src={photo}
        alt="baby"
        className="w-full h-auto object-cover block"
        style={{ maxWidth: "100vw" }}
      />
    </div>
  );
}
