import { themeClass, cardClass, titleClass } from './Card.css';

export default function Card() {
	return (
		<section className={`${themeClass} mt-8`}>
			<div className={cardClass}>
				<div className={titleClass}>
					Ben Haines
				</div>
				<div>
					Description about the guy. Here is a short little bio about him. Everyone loves to learn about people on the internet.
				</div>
			</div>
		</section>
	)
}