import Col from './Layout/Col';
import Container from './Layout/Container';
import Nav from './Nav';

const Header = () => {
	return (
		<header className="bg-years-pattern bg-center bg-no-repeat py-8">
			<Nav />
			<Container>
				<Col colStart={[2, null, null, 3, null]} colEnd={[24, null, null, 20, null]}>
					<h1
						className="pt-40 pb-24 font-jetbrains text-[56px]
					 font-bold uppercase leading-lg tracking-wider text-white lg:text-7xl lg:leading-xl"
					>
						Nearly a century driven by a passion for excellence
					</h1>
				</Col>
			</Container>
		</header>
	);
};
export default Header;
