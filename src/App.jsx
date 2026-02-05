import { useState } from "react";

export default function App() {
  const [yes, setYes] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  const herName = "My Love 💖"; // change this

  function moveNo() {
    // random jump (keeps it on screen)
    const x = Math.floor(Math.random() * 200) - 100;
    const y = Math.floor(Math.random() * 200) - 100;
    setNoPos({ x, y });
  }

  if (yes) {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>YAYYYY 💞</h1>
        <p style={styles.text}>
          {herName}, you just made me the happiest person ever 🥰
        </p>
        <p style={styles.text}>Happy Valentine’s Day 💘</p>

        <div style={styles.heart}>💖💖💖</div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Will you be my Valentine? 💘</h1>
      <p style={styles.text}>{herName}, don’t think too hard 😌</p>

      <div style={styles.buttonArea}>
        {/* YES button */}
        <button style={styles.yesBtn} onClick={() => setYes(true)}>
          Yes 💖
        </button>

        {/* NO button */}
        <button
          style={{
            ...styles.noBtn,
            transform: `translate(${noPos.x}px, ${noPos.y}px)`,
          }}
          onTouchStart={moveNo}
          onMouseEnter={moveNo}
          onClick={moveNo}
        >
          No 🙃
        </button>
      </div>

      <p style={styles.footer}>Made with ❤️ just for you</p>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(#ffe4ef, #ffffff)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "system-ui",
    textAlign: "center",
    padding: 20,
  },

  title: {
    fontSize: 38,
    marginBottom: 10,
  },

  text: {
    fontSize: 18,
    color: "#444",
    marginBottom: 10,
  },

  buttonArea: {
    marginTop: 25,
    display: "flex",
    gap: 15,
    position: "relative",
  },

  yesBtn: {
    padding: "14px 26px",
    fontSize: 18,
    borderRadius: 999,
    border: "none",
    background: "#ff4d6d",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },

  noBtn: {
    padding: "14px 26px",
    fontSize: 18,
    borderRadius: 999,
    border: "none",
    background: "#ddd",
    cursor: "pointer",
    position: "relative",
  },

  footer: {
    marginTop: 40,
    fontSize: 14,
    color: "#777",
  },

  heart: {
    fontSize: 40,
    marginTop: 20,
    animation: "pulse 1s infinite",
  },
};
