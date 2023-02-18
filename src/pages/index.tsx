import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Footer from '../comps/Footer';
import Col from '../comps/Layout/Col';
import Container from '../comps/Layout/Container';
import Nav from '../comps/Nav';

const Page: NextPage = () => {
	const { pathname } = useRouter();
	return (
		<div className="flex h-screen flex-col justify-between bg-primary pt-8">
			<Head>
				<title>Beherman Group</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Nav pathname={pathname} />
			<Container className="mb-auto">
				<Col>
					<h1 className="pt-80 font-jetbrains text-7xl uppercase text-white">
						Navigate to the{' '}
						<Link className="underline" href={'/about'}>
							About page
						</Link>
					</h1>
				</Col>
			</Container>
			<Footer />
		</div>
	);
};

export default Page;
