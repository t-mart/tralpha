import LogoPath from "./images/logo.svg";

export function Header() {
  return (
    <header>
      <nav class="flex justify-between items-center">
        <div class="flex space-x-2 text-xl font-bold items-center">
          <img src={LogoPath} class="h-8 w-8" />
          <h1>Tralpha</h1>
        </div>
        <ul class="flex text-xl space-x-2 font-semibold items-center">
          <li class="hover:underline">About</li>
        </ul>
      </nav>
    </header>
  );
}
