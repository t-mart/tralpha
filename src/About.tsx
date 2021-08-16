export function About() {
  return (
    <div class="max-w-prose mx-auto space-y-4">
      <p>
        With Tralpha ("translate alphabet"), you can easily convert your text
        into other interesting and unusual Unicode alphabets.
      </p>

      <p>For example:</p>

      <div class="flex justify-evenly items-center">
        <span class="text-5xl">hello</span>
        <span> converts to </span>
        <span class="text-5xl">𝖍𝖊𝖑𝖑𝖔</span>
      </div>

      <p>
        The converted text is not in a different font &#8212; instead, it is
        composed of different characters that happen to look like the original
        text. Here, we call these different character sets "alphabets".
      </p>

      <p>
        In truth, the characters of these other alphabets are not intended to
        represent general text. In the above example, the string "𝖍𝖊𝖑𝖑𝖔" is
        composed of characters known as Fraktur, which have special significance
        in mathematics. The Unicode Standard recommends against this kind of
        translation, but we're just having fun here. 🥳
      </p>

      <p>Please note some caveats to using this tool:</p>

      <ul class="space-y-4 list-disc ml-8">
        <li>
          How the characters render is dependent on the font. Therefore, your
          font may be unable to render some characters or may render them
          strangely. Remember that none of these alphabets are intended to
          represent general text. Additionally, you should not expect the
          characters to look the same on other people's computers.
        </li>
        <li>
          Alphabets are somewhat arbitrary because I defined them. They're not
          standard alphabets. In some cases, the Unicode Standard defines
          characters consecutively that share similar styling, which make for
          easy compilation of an alphabet. But in other cases, the characters
          are picked from different ranges of Unicode. A good example of this
          can be found with{" "}
          <a
            href="https://en.wikipedia.org/w/index.php?title=Unicode_subscripts_and_superscripts&oldid=1038944135#Latin,_Greek_and_Cyrillic_tables"
            class="underline text-gray-300 hover:text-yellow-500"
          >
            the superscript and subscript alphabets
          </a>
          .
        </li>
        <li>
          While a best effort has been made to provide alphabets that map from
          ASCII completely, there are many holes: Some alphabets are missing
          common characters, so we may pass those characters through
          unconverted. Or, some alphabets may use the same characters for upper
          and lower case. In general,{" "}
          <strong class="font-bold">
            this tool be best suited to short pieces of text without punctuation
            or numbers
          </strong>
          .
        </li>
      </ul>

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

      <p>
        See a bug or typo? Want to contribute a new alphabet or other feature?
        Then please{" "}
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
