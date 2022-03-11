import classNames from "classnames";

type level = 1 | 2 | 3 | 4 | 5 | 6;

// Heading props
type HeadingProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> & {
	level: level
  variants?: string[] // Specifying a variant will remove the default variant derived from level
}

const baseClass = "Heading";

const Heading: React.FC<HeadingProps> = (props) => {
	const H = `h${props.level}` as const
  const variants = props.variants || [props.level];

  const clss = classNames(baseClass, variants.map(variant => `${baseClass}--${variant}`), props.className)

  return <H {...props} className={clss} />
}

const H1: React.FC<Omit<HeadingProps, 'level'>> = (props) => {
	return <Heading level={1} {...props}/>
}

const H2: React.FC<Omit<HeadingProps, 'level'>> = (props) => {
	return <Heading level={2} {...props}/>
}

const H3: React.FC<Omit<HeadingProps, 'level'>> = (props) => {
	return <Heading level={3} {...props}/>
}

const H4: React.FC<Omit<HeadingProps, 'level'>> = (props) => {
	return <Heading level={4} {...props}/>
}

const H5: React.FC<Omit<HeadingProps, 'level'>> = (props) => {
	return <Heading level={5} {...props}/>
}

const H6: React.FC<Omit<HeadingProps, 'level'>> = (props) => {
	return <Heading level={6} {...props}/>
}

export {
	Heading,
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
}