import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../comps/Header';

import Col from '../comps/Layout/Col';
import Container from '../comps/Layout/Container';

const Page: NextPage = () => {
	return (
		<div className="bg-primary">
			<Head>
				<title>Beherman Group</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
		</div>
	);
};

export default Page;
