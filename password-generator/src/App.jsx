import { useCallback, useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pwd = "";
    if (number) str += "1234567890";
    if (character) str += "')(*&^%$#@!~<>?:{}[]";
    for (let i = 0; i < length; i++) {
      let c = str.charAt(Math.floor(Math.random() * str.length));
      pwd += c;
    }
    setPassword(pwd);
  }, [length, number, character, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, number, character, passwordGenerator]);

  const handleCopy = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password, passwordGenerator]);

  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="flex flex-col gap-3 justify-center items-center h-30 w-150 bg-amber-900 m-2 text-3xl mt-20">
          <div className="flex flex-row justify-center items-center">
            <input
              type="text"
              id="password"
              placeholder="Password"
              value={password}
              readOnly
              ref={passwordRef}
              className="flex justify-centre items-center bg-amber-100 text-amber-950 text-2xl w-120 h-10 rounded-2xl pl-2 "
            />
            <button
              id="cpy-btn"
              className="bg-gray-900 rounded-2xl text-xl h-10 w-20   "
              onClick={handleCopy}
            >
              Copy
            </button>
          </div>
          <div className="flex flex-row gap-2 justify-center items-center text-xl">
            <input
              type="range"
              name="length"
              id="length"
              min="1"
              max="30"
              value={length}
              className="cursor-pointer "
              onChange={(e) => {
                setLength(Number(e.target.value));
              }}
            />
            <label htmlFor="length">Length</label>
            <input
              type="checkbox"
              name="number"
              id="number"
              defaultChecked={number}
              onClick={() => setNumber((prev) => !prev)}
            />
            <label htmlFor="number">Numbers</label>
            <input
              type="checkbox"
              name="character"
              id="character"
              defaultChecked={character}
              onClick={() => setCharacter((prev) => !prev)}
            />
            <label htmlFor="character">Special Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
