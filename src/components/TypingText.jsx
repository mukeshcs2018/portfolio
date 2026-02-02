import { useEffect, useState } from "react";

const TypingText = ({
  phrases,
  speed = 80,
  deleteSpeed = 40,
  pause = 1200,
  cursor = "|",
  className = "",
}) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!phrases.length) return undefined;
    const currentPhrase = phrases[index % phrases.length];

    let timeout = isDeleting ? deleteSpeed : speed;

    if (!isDeleting && text === currentPhrase) {
      timeout = pause;
    }

    if (isDeleting && text === "") {
      timeout = pause / 3;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentPhrase) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
        return;
      }

      const nextLength = isDeleting ? text.length - 1 : text.length + 1;
      setText(currentPhrase.slice(0, nextLength));
    }, timeout);

    return () => clearTimeout(timer);
  }, [phrases, index, isDeleting, text, speed, deleteSpeed, pause]);

  return (
    <span className={className}>
      {text}
      <span className="text-accent-500">{cursor}</span>
    </span>
  );
};

export default TypingText;


