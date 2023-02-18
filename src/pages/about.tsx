import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../comps/Header';

import Col from '../comps/Layout/Col';
import Container from '../comps/Layout/Container';
import SectionTitle from '../comps/SectionTitle';

const Page: NextPage = () => {
	return (
		<div className="bg-primary">
			<Head>
				<title>Beherman Group</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<main>
				<section>
					<Container>
						<Col colStart={[1, null, null, null, null]} colEnd={[27, null, null, null, null]}>
							<Image alt="Panoramic view of office" src="/images/panoramic.jpg" width={554} height={376} />
						</Col>
						<Col>
							<SectionTitle>Our vision</SectionTitle>
						</Col>
						<Col colEnd={[12]}>
							<span className="h-[1px] bg-white"></span>
						</Col>
						<Col>
							<p className="pt-8 pb-6 text-2xl text-accent">Our corporate vision for the future is based on the secure foundation of experience and tradition.</p>
							<p className="pb-14 leading-7 text-white">
								Flexibility and adaptability are vital to our company’s future. We will invest in new technologies where appropriate and adopt an evolutionary approach for our tools
								and services. Our aim is to respond efficiently and effectively to new markets in a multicultural context.
							</p>
						</Col>
					</Container>
				</section>
			</main>
		</div>
	);
};

export default Page;
