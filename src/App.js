import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Lilli from './Lilli';
import Intro from './Intro';
import Button from './Button';
import './Button.css';
import drawing from './images/IMG_0854.jpg';
import lilliFancy from './images/IMG_2334.JPG';
import lilliFancy2 from './images/IMG_2335.JPG';
import star from './images/IMG_1665.png';
import star2 from './images/IMG_1666.png';
import lilliDrip from './images/IMG_2411.JPG';
import wedding from './images/IMG_4834.JPG';
import twins from './images/35EF05D2-9F27-4C04-9698-4E068BDD9D5A.JPG';
import cowboy from './images/C5DDF9D8-924F-49A7-93CE-BF3B02BCD25F.JPG';

function App() {
	const [ counter, setCounter ] = useState(0);

	const pictures = [ drawing, lilliDrip, lilliFancy, lilliFancy2, star, star2, wedding, twins, cowboy ];

	if (counter > 8) {
		setCounter(0);
	}
	if (counter < 0) {
		setCounter(8);
	}

	return (
		<main className="App">
			<div className="">
				<Intro />
			</div>

			<div className={counter === 0 ? 'active' : 'notActive'} id="start">
				<Lilli love="This is probably one of best drawings I've ever seen. " pic={drawing} />
			</div>
			<div className={counter === 1 ? 'active' : 'notActive'}>
				<Lilli
					love="You're beautiful and amazing. I'm not generally interested in cowgirls but you darling make it work!"
					pic={lilliFancy}
				/>
			</div>
			<div className={counter === 2 ? 'active' : 'notActive'}>
				<Lilli love="This was a really lovely night; we need to have more like it." pic={star} />
			</div>
			<div className={counter === 3 ? 'active' : 'notActive'}>
				<Lilli
					love="I love this photo of the three of us lol I thought about adding the third picture from this night but decided it was best to leave it out!!"
					pic={star2}
				/>
			</div>
			<div className={counter === 4 ? 'active' : 'notActive'}>
				<Lilli
					love="I not only loved your outfit, but all your amazing work that was floating around the party. You are so very talented and I'm excited to see all the beautiful artwork you create in the future"
					pic={lilliFancy2}
				/>
			</div>
			<div className={counter === 5 ? 'active' : 'notActive'}>
				<Lilli
					love="I love this photo for the vibe lol it's fun going places with you because it doesn't really matter where we go, as long as I'm with you it’s a good time :)"
					pic={lilliDrip}
				/>
			</div>
			<div className={counter === 6 ? 'active' : 'notActive'}>
				<Lilli
					love="This is an iconic photo that was actually stolen. This was pretty early on in our relationship and watching you steal that picture gave me a lot of confidence in us"
					pic={wedding}
				/>
			</div>
			<div className={counter === 7 ? 'active' : 'notActive'}>
				<Lilli
					love="The days when we accidently wear the same outfit are precious. We need to get matching PJs, put that on the calendar. "
					pic={twins}
				/>
			</div>
			<div className={counter === 8 ? 'active' : 'notActive'}>
				<Lilli love="This could be our best photo, need I say more?" pic={cowboy} />
			</div>
			<div className="Btn">
				<a className="Btn-tag" onClick={() => setCounter(counter + 1)}>
					Next
				</a>
				<a className="Btn-tag" onClick={() => setCounter(counter - 1)}>
					Back
				</a>
			</div>
		</main>
	);
}

export default App;
