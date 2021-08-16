import { mapsByName } from "./alphabet";

import { useState } from "preact/hooks";
import { Translation } from "./Translation";

export function Translator() {
  const [inputText, setInputText] = useState("");

  const onInput = (e: Event) => {
    if (e.target instanceof HTMLInputElement) {
      setInputText(e.target.value);
    }
  };


  return (
    <div class="flex flex-col space-y-4">
      <input
        type="text"
        value={inputText}
        onInput={onInput}
        class="rounded bg-gray-900 focus:ring-2 focus:ring-yellow-500 focus:outline-none ring-1 ring-gray-700 p-2"
        placeholder="Enter some text"
      ></input>
      {inputText && (
        <div class="grid grid-cols-1 gap-4">
          {Object.keys(mapsByName).map((name) => (
            <Translation
              alphabetName={name}
              inputText={inputText}
              key={name}
            />
          ))}
        </div>
      )}
    </div>
  );
}
