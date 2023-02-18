import Link from 'next/link';
import Col from './Layout/Col';
import Container from './Layout/Container';
import Burger from './Svg/Burger';
import Logo from './Svg/Logo';
import { motion } from 'framer-motion';

interface NavItemProps {
	children: React.ReactNode;
	href: string;
}

const Nav = ({ pathname }: { pathname: string }) => {
	const NavItem = ({ children, href }: NavItemProps) => {
		return (
			<li className="tracking-xl text-white">
				<Link className="group" href={href}>
					{children}
					<span className={`block h-0.5 ${href === pathname ? 'max-w-100' : 'max-w-0'}  bg-accent transition-all duration-500 group-hover:max-w-full`}></span>
				</Link>
			</li>
		);
	};
	return (
		<Container className="bg-primary">
			<Col className="items-center pl-2" colStart={[2, null, null, 2, null]} colEnd={[15, null, null, 6, null]}>
				<Link href={'/'}>
					<Logo />
				</Link>
			</Col>
			<Col colStart={[22, null, null, 14, null]}>
				<nav className="hidden lg:block lg:pl-10">
					<motion.ul className="flex items-center justify-between" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
						<NavItem href="/">Home</NavItem>
						<NavItem href="/about">About</NavItem>
						<NavItem href="#">History</NavItem>
						<NavItem href="#">Philantropy</NavItem>
						<li>
							<button className="rounded-full bg-white py-2.5 px-6 font-jetbrains text-sm uppercase tracking-2xl transition-colors duration-300 hover:bg-accent hover:text-white">
								Contact
							</button>
						</li>
					</motion.ul>
				</nav>
				<button className="flex aspect-square w-12 items-center justify-center rounded-full bg-accent p-2 lg:hidden">
					<Burger />
				</button>
			</Col>
		</Container>
	);
};
export default Nav;
