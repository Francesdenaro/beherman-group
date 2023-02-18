import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Cta from '../comps/Cta';
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
						<Col className="hidden lg:grid" colStart={[null, null, null, 15]}>
							<SectionTitle>Our vision</SectionTitle>
						</Col>
						<Col colStart={[1, null, null, 2, null]} colEnd={[27, null, null, 11, null]}>
							<Image alt="Panoramic view of office" src="/images/panoramic.jpg" width={554} height={376} />
						</Col>
						<Col className="lg:hidden" colStart={[2, null, null, 15]}>
							<SectionTitle>Our vision</SectionTitle>
						</Col>
						<Col colStart={[2, null, null, 14]} colEnd={[11, null, null, 16, null]}>
							<span className="h-[1px] bg-white lg:mt-6"></span>
						</Col>
						<Col colStart={[2, null, null, 17]} colEnd={[26, null, null, 25]}>
							<p className="pt-8 pb-6 text-2xl text-accent lg:pt-3">Our corporate vision for the future is based on the secure foundation of experience and tradition.</p>
							<p className="pb-14 leading-7  text-white lg:pb-0">
								Flexibility and adaptability are vital to our company’s future. We will invest in new technologies where appropriate and adopt an evolutionary approach for our tools
								and services. Our aim is to respond efficiently and effectively to new markets in a multicultural context.
							</p>
						</Col>
					</Container>
				</section>
				<aside className="lg:pt-28 lg:pb-36">
					<Container>
						<Col className="bg-accent px-8 pt-9 pb-11" colStart={[1, null, null, 3, null]} colEnd={[27, null, null, null, null]}>
							<div className="flex max-w-5xl flex-col lg:flex-row lg:items-center lg:justify-between">
								<h3 className="mb-10 border-l border-l-secondary pl-8 text-[28px] leading-9 text-white lg:m-0 lg:w-1/2">
									Are you looking for a reference partner to develop your mobility activities?
								</h3>
								<Cta />
							</div>
						</Col>
					</Container>
				</aside>
			</main>
		</div>
	);
};

export default Page;
