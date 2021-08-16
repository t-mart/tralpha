export function About() {
  return (
    <div class="max-w-prose mx-auto space-y-4">
      <h2 class="text-2xl text-yellow-500">What is this thing?</h2>

      <p>
        Ever wanted to make your text stand out in a chat message, tweet, or
        post, but can't change your font?
      </p>

      <p>
        With Tralpha ("
        <em class="italic">tr</em>anslate <em class="italic">alpha</em>bet"),
        you can easily convert your text into other interesting and unusual
        Unicode alphabets{" "}
        <strong class="font-bold">within the font you are already using</strong>
        !
      </p>

      <p>Here's an example. You can change</p>

      <div class="flex items-center flex-col">
        <span class="text-5xl my-4">cold plums</span>
        <span class="my-4">to</span>
        <span class="text-5xl my-4">𝓬𝓸𝓵𝓭 𝓹𝓵𝓾𝓶𝓼</span>
      </div>

      <p>
        Again, the converted text is not in a different font &#8212; instead, it
        is composed of a different set of characters that happen to look like
        the original ones. We call these different character sets{" "}
        <em class="italic">alphabets</em>.
      </p>

      <p>In truth,{" "}
        <a
          href="https://www.unicode.org/charts/PDF/U1D400.pdf"
          class="underline text-gray-300 hover:text-yellow-500"
        >
          the Unicode Standard recommends against using these alphabets for
          general text styling
        </a>
        , but we're just having fun here. 🥳
      </p>

      <h2 class="text-2xl text-yellow-500">Caveats</h2>

      <ul class="space-y-4 list-disc ml-8">
        <li>
          How the characters render is dependent on your font. Therefore, your
          font may be unable to render some characters or may render them
          strangely. Remember that none of these alphabets are intended to
          represent general text. Additionally, you should not expect the
          characters to look the same on other people's devices because they may
          be using a different font.
        </li>
        <li>
          Tralpha's alphabets are arbitrary. In some cases, the Unicode Standard
          defines a consecutive range of characters that share similar styling,
          which make it easy to say that they're an alphabet. But in other
          cases, the characters are picked from different ranges of Unicode, so
          their compilation is less intuitive.{" "}
          <a
            href="https://en.wikipedia.org/w/index.php?title=Unicode_subscripts_and_superscripts&oldid=1038944135#Latin,_Greek_and_Cyrillic_tables"
            class="underline text-gray-300 hover:text-yellow-500"
          >
            The superscript and subscript alphabets
          </a>
          , for example, come from all over the standard.
        </li>
        <li>
          While a best effort has been made to provide alphabets that map from
          ASCII completely, there are many holes: Some alphabets are missing
          common characters, so we may pass input characters through
          unconverted. Or, some alphabets may use the same characters for upper
          and lower case. In general,{" "}
          <strong class="font-bold">
            this tool be best suited to short pieces of text without punctuation
            or numbers
          </strong>
          .
        </li>
      </ul>

      <h2 class="text-2xl text-yellow-500">Credits</h2>

      <p>
        This tool was inspired by{" "}
        <a
          href="http://qaz.wtf/u/convert.cgi"
          class="underline text-gray-300 hover:text-yellow-500"
        >
          "Unicode Text Converter" by Eli the Bearded
        </a>
        .
      </p>

      <h2 class="text-2xl text-yellow-500">Contribute</h2>

      <p>
        See a bug or typo? Want to suggest a new alphabet or other feature? Then
        please{" "}
        <a
          href="https://github.com/t-mart/tralpha/issues"
          class="underline text-gray-300 hover:text-yellow-500"
        >
          create an issue on GitHub
        </a>
        .
      </p>
    </div>
  );
}
