import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Cta from '../comps/Cta';
import Footer from '../comps/Footer';
import Header from '../comps/Header';
import Col from '../comps/Layout/Col';
import Container from '../comps/Layout/Container';
import NameRole from '../comps/NameRole';
import Nav from '../comps/Nav';
import SectionTitle from '../comps/SectionTitle';

const Page: NextPage = () => {
	const { pathname } = useRouter();
	console.log(pathname);
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
