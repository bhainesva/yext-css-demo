import classNames from "classnames";

// Button props
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined
  variants?: string[]
  baseClass?: string
}
// Anchor props
type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: string
  variants?: string[]
  baseClass?: string
}
// Input/output options
type Overload = {
  (props: ButtonProps): JSX.Element
  (props: AnchorProps): JSX.Element
}
// Guard to check if href exists in props
const hasHref = (props: ButtonProps | AnchorProps): props is AnchorProps => 'href' in props
// Component
const Clickable: Overload = (props: ButtonProps | AnchorProps) => {
  // anchor render
  const variants = props.variants || [];
  const isLink = hasHref(props);
  const baseClass = props.baseClass
    ? props.baseClass
    : isLink ? "Link" : "Button";

  const clss = classNames(baseClass, variants.map(variant => `${baseClass}--${variant}`), props.className)

  if (hasHref(props)) return <a {...props} className={clss} />
  return <button {...props} className={clss} />
}

// Usage
// function App() {
//   return (
//   <>
//     {/* 😎 All good */}
//     <Button className="test" target="_blank" href="https://www.google.com">
//       Test
//     </Button>
//     {/* 😭 Error, `disabled` doesnt exist on anchor element */}
//     <Button disabled href="x">
//       Test
//     </Button>
//   </>
//   )
// }

export {
  Clickable as Button,
  Clickable as Link,
}