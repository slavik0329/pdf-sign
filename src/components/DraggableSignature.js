import Draggable from "react-draggable"; // The default

export default function DraggableSignature({ url, onEnd }) {
  const styles = {
    container: {
      position: 'absolute',
      zIndex: 100000,
    }
  }
  return (
    <Draggable onStop={onEnd}>
      <div style={styles.container}>
        <img src={url} width={200} style={styles.img} draggable={false} />
      </div>
    </Draggable>
  );
}
