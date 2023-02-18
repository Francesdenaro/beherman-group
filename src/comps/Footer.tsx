import Link from 'next/link';

import Cta from './Cta';
import Col from './Layout/Col';
import Container from './Layout/Container';
import Caracal from './Svg/Caracal';
import Fax from './Svg/Fax';
import LogoMono from './Svg/LogoMono';
import Mail from './Svg/Mail';
import Phone from './Svg/Phone';

const Footer = () => {
	return (
		<footer className="bg-primary-dark pt-8 lg:p-0 lg:pb-8">
			<Container>
				<Col className="mb-14 hidden lg:row-start-1 lg:grid" colStart={[null, null, null, 2, null]} colEnd={[null, null, null, 26]}>
					<span className="block h-[1px] bg-light-gray"></span>
				</Col>
				<Col className="mb-14 lg:row-start-2" colStart={[2]} colEnd={[26, null, null, null]}>
					<h4 className="mb-8 whitespace-pre text-2xl text-white">
						Want to know more?
						<br />
						Want to meet us?
						<br />
						Be part of the adventure?
					</h4>
					<Cta outline />
				</Col>
				<Col className="mb-14 hidden lg:row-start-2 lg:grid" colStart={[null, null, null, 14]} colEnd={[null, null, null, 16]}>
					<nav>
						<ul className="flex flex-col items-start gap-8 uppercase tracking-2xl text-white">
							<li>
								<Link className="group" href={'/'}>
									Home
									<span className={`block h-0.5 max-w-0 bg-white transition-all duration-500 group-hover:max-w-full`}></span>
								</Link>
							</li>
							<li>
								<Link className="group" href={'/about'}>
									About
									<span className={`block h-0.5 max-w-0 bg-white transition-all duration-500 group-hover:max-w-full`}></span>
								</Link>
							</li>
							<li>
								<Link className="group" href={'#'}>
									History
									<span className={`block h-0.5 max-w-0 bg-white transition-all duration-500 group-hover:max-w-full`}></span>
								</Link>
							</li>
							<li>
								<Link className="group" href={'#'}>
									Contact
									<span className={`block h-0.5 max-w-0 bg-white transition-all duration-500 group-hover:max-w-full`}></span>
								</Link>
							</li>
						</ul>
					</nav>
				</Col>
				<Col className="mb-14 lg:row-start-2" colStart={[2, null, null, 20]} colEnd={[26, null, null, 26]}>
					<div className="flex flex-col gap-8 text-sm">
						<strong className="whitespace-pre font-bold tracking-2xl text-white">
							INDUSTRIEWEG, 3{'\n'}2880 BORNEM
							<span className="hidden lg:inline">
								, <br />
							</span>
							BELGIUM
						</strong>
						<ul className="flex flex-col gap-4">
							<li>
								<Link className="flex" href={'tel:+32 (0)3 890 91 11'}>
									<Phone /> <span className="pl-6.5 text-white">+32 (0)3 890 91 11</span>
								</Link>
							</li>
							<li className="flex">
								<Link className="flex" href={'tel:+32 (0)3 890 91 18'}>
									<Fax /> <span className="pl-6.5 text-white">+32 (0)3 890 91 18</span>
								</Link>
							</li>
							<li className="flex tracking-widest text-white">
								<Link className="flex" href={'mailto:press@beherman.com'}>
									{/* 
										The Figma file had two different email addresses for different viewports.
										I decided to use only one to keep the href valid.
									*/}
									<Mail /> <span className="pl-6.5">press@beherman.com</span>
								</Link>
							</li>
						</ul>
					</div>
				</Col>
				<Col className="mb-6.5 lg:row-start-3 lg:m-0">
					<LogoMono />
				</Col>
				<Col className="lg:row-start-3" colStart={[2, null, null, 13]}>
					<ul className="flex items-center gap-3 divide-x divide-tertiary-dark border-b border-tertiary-dark pb-2 text-xs tracking-wider text-gray lg:border-b-0 lg:p-0">
						<li>
							<Link href={'#'}>Cookie settings</Link>
						</li>
						<li className="pl-3">
							<Link href={'#'}>Terms & Conditions</Link>
						</li>
						<li className="pl-3">
							<Link href={'#'}>Privacy policy</Link>
						</li>
						<div className="hidden items-center justify-between pl-3 lg:flex">
							<span className="text-xs tracking-wider text-gray lg:pr-3">© 2022 Beherman Group. All rights reserved.</span>
							<Caracal />
						</div>
					</ul>
					<div className="flex items-center justify-between lg:hidden">
						<span className="pt-2 pb-4 text-xs tracking-wider text-gray">© 2022 Beherman Group. All rights reserved.</span>
						<Caracal />
					</div>
				</Col>
			</Container>
		</footer>
	);
};
export default Footer;
