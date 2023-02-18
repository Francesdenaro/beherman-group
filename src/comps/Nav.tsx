import Link from 'next/link';
import Col from './Layout/Col';
import Container from './Layout/Container';
import Burger from './Svg/Burger';
import Logo from './Svg/Logo';

interface NavItemProps {
	children: React.ReactNode;
}

const NavItem = ({ children }: NavItemProps) => {
	return (
		<li className="tracking-xl text-white">
			<Link href={'#'}>{children}</Link>
		</li>
	);
};

const Nav = () => {
	return (
		<Container className="bg-primary">
			<Col className="items-center" colStart={[2, null, null, 2, null]} colEnd={[15, null, null, 6, null]}>
				<Logo />
			</Col>
			<Col colStart={[22, null, null, 15, null]}>
				<nav className="hidden lg:block">
					<ul className="flex items-center justify-between">
						<NavItem>Home</NavItem>
						<NavItem>About</NavItem>
						<NavItem>History</NavItem>
						<NavItem>Philantropy</NavItem>
						<li>
							<button className="rounded-full bg-white py-2.5 px-6 font-jetbrains text-sm uppercase tracking-2xl">Contact</button>
						</li>
					</ul>
				</nav>
				<button className="flex aspect-square w-12 items-center justify-center rounded-full bg-accent p-2 lg:hidden">
					<Burger />
				</button>
			</Col>
		</Container>
	);
};
export default Nav;
