import LogoPath from "./images/logo.svg";

interface Props {
  extraClasses: string,
}

export function Logo(props: Props) {
  const { extraClasses = "" } = props;
  return (
    <svg class={extraClasses}>
      <image href={LogoPath} />
    </svg>
  )
}