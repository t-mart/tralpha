import LogoPath from "./images/logo.svg";

export function Header() {
  return (
    <header>
      <nav class="flex justify-between items-center">
        <a href="/">
          <div class="flex space-x-2 text-xl font-bold items-center hover:underline">
            <img src={LogoPath} class="h-8 w-8" />
            <h1>Tralpha</h1>
          </div>
        </a>
        <ul class="flex text-xl space-x-8 font-semibold items-center">
          <li class="hover:underline"><a href="/about">About</a></li>
        </ul>
      </nav>
    </header>
  );
}
