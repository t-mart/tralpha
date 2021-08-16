import { mapsByName } from "./alphabet";

import { useState } from "preact/hooks";
import { Translation } from "./Translation";

export function Translator() {
  const [inputText, setInputText] = useState(
    new URL(window.location.href).searchParams.get("text") || ""
  );

  const onInput = (e: Event) => {
    if (e.target instanceof HTMLInputElement) {
      setInputText(e.target.value);
    }
  };

  const setPermalink = () => {
    const permalink = new URL(window.location.href);
    permalink.searchParams.set("text", inputText);
    window.location.href = permalink.href;
  };

  return (
    <div class="flex flex-col gap-4">
      <input
        type="text"
        value={inputText}
        onInput={onInput}
        class="rounded bg-gray-900 focus:ring-2 focus:ring-yellow-500 focus:outline-none ring-1 ring-gray-700 p-2"
        placeholder="Enter some text"
      ></input>
      {inputText && (
        <>
          <div class="text-sm flex gap-4 text-gray-400 underline">
            <button
              onClick={() => setInputText("")}
              class="flex items-center gap-1 hover:text-gray-200"
            >
              Clear
            </button>
            <button
              onClick={setPermalink}
              class="flex items-center gap-1 hover:text-gray-200"
            >
              Permalink
            </button>
          </div>
          <div class="grid grid-cols-1 gap-4">
            {Object.keys(mapsByName).map((name) => (
              <Translation
                alphabetName={name}
                inputText={inputText}
                key={name}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
