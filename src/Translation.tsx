import copy from "copy-to-clipboard";
import { useRef } from "preact/hooks";

import { translateText } from "./alphabet";

interface Props {
  alphabetName: string;
  inputText: string;
}

export function Translation(props: Props) {
  const { alphabetName, inputText } = props;
  const translation = translateText(alphabetName, inputText);

  const copyStatusRef = useRef<HTMLSpanElement>(null);
  let timer: number | null = null;

  const invisibleCopyStatus = () => {
    if (copyStatusRef.current) {
      const cl = copyStatusRef.current.classList;

      cl.add("invisible");
    }
  }

  const hideCopyStatus = () => {
    if (copyStatusRef.current) {
      const cl = copyStatusRef.current.classList;

      cl.add("opacity-0");
      cl.remove("opacity-100");

      timer = window.setTimeout(invisibleCopyStatus, 150);
    }
  }

  const showCopyStatus = () => {
    timer !== null && clearTimeout(timer);

    if (copyStatusRef.current) {
      const cl = copyStatusRef.current.classList;

      cl.remove("invisible", "opacity-0");
      cl.add("opacity-100");

      timer = window.setTimeout(hideCopyStatus, 2000);
    }
  }

  const onClick = (e: Event) => {
    const copySuccess = copy(translation);

    if (copySuccess) {
      showCopyStatus();
    }
  };

  return (
    <div class="rounded border-2 border-gray-400 p-4 flex flex-col gap-2">
      <div class="flex justify-between items-center">
        <span class="text-gray-400">{alphabetName}</span>
        <div class="flex items-center">
          <span
            ref={copyStatusRef}
            class="text-sm text-yellow-500 transition opacity-0 invisible"
          >
            Copied!
          </span>
          <button
            onClick={onClick}
            class="bg-yellow-200 hover:bg-yellow-400 active:bg-yellow-500 text-gray-500 font-bold py-1 px-2 rounded ml-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 mx-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="break-all text-3xl">{translation}</div>
    </div>
  );
}
