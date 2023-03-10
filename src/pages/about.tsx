import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Cta from '../comps/Cta';
import Footer from '../comps/Footer';
import Header from '../comps/Header';
import Col from '../comps/Layout/Col';
import Container from '../comps/Layout/Container';
import NameRole from '../comps/NameRole';
import SectionTitle from '../comps/SectionTitle';

const Page: NextPage = () => {
	const { pathname } = useRouter();
	return (
		<div className="bg-primary pt-8">
			<Head>
				<title>Beherman Group</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header pathname={pathname} />

			<main>
				<motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
					<Container className="lg:items-start">
						<Col className="lg:row-start-2" colStart={[1, null, null, 2, null]} colEnd={[27, null, null, 11, null]}>
							<Image alt="Image of a panoramic view of the office" src="/images/panoramic.jpg" width={554} height={376} />
						</Col>
						<Col className="lg:row-start-1" colStart={[2, null, null, 15]}>
							<SectionTitle>Our vision</SectionTitle>
						</Col>
						<Col className="lg:row-start-2" colStart={[2, null, null, 14]} colEnd={[11, null, null, 16, null]}>
							<span className="h-[1px] bg-white lg:mt-6"></span>
						</Col>
						<Col className="lg:row-start-2" colStart={[2, null, null, 17]} colEnd={[26, null, null, 25]}>
							<p className="pt-8 pb-10 text-2xl text-accent lg:pt-3">Our corporate vision for the future is based on the secure foundation of experience and tradition.</p>
							<p className="pb-14 leading-7  text-white lg:pb-0">
								Flexibility and adaptability are vital to our company’s future. We will invest in new technologies where appropriate and adopt an evolutionary approach for our tools
								and services. Our aim is to respond efficiently and effectively to new markets in a multicultural context.
							</p>
						</Col>
					</Container>
				</motion.section>

				<aside className="lg:pt-28 lg:pb-36">
					<Container>
						<Col className="bg-accent px-8 pt-9 pb-11 lg:px-28" colStart={[1, null, null, 3, null]} colEnd={[27, null, null, null, null]}>
							<div className="flex max-w-5xl flex-col lg:flex-row lg:items-center lg:justify-between">
								<h3 className="mb-10 border-l border-l-secondary pl-8 text-[28px] leading-9 text-white lg:m-0 lg:w-1/2">
									Are you looking for a reference partner to develop your mobility activities?
								</h3>
								<Cta />
							</div>
						</Col>
					</Container>
				</aside>

				<motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
					<Container className="lg:items-start">
						<Col className="lg:pl-10" colStart={[1, null, null, 15, null]} colEnd={[27, null, null, 26, null]}>
							<Image alt="Image of a blue truck in a city" src="/images/truck.jpg" width={554} height={376} />
						</Col>
						<Col className="lg:row-start-1" colStart={[2, null, null, 3]}>
							<SectionTitle>Commitment</SectionTitle>
						</Col>
						<Col className="lg:row-start-2" colStart={[2, null, null, 2]} colEnd={[11, null, null, 4, null]}>
							<span className="h-[1px] bg-white lg:mt-6"></span>
						</Col>
						<Col className="lg:row-start-2" colStart={[2, null, null, 5]} colEnd={[26, null, null, 14]}>
							<div>
								<p className="pt-8 pb-10 text-2xl text-accent lg:pt-3 lg:pr-12 2xl:pr-16">
									In a world committed to the ecological transition, we want to make our contribution by building the mobility solutions of tomorrow.
								</p>
								<p className="pb-14 leading-7  text-white lg:pb-0">
									The brands we are working with today, Fuso and Piaggio, are paving the way for new ways of conceiving transportation, on roads all over the world, at city entrances
									and even within urban traffic.
								</p>
							</div>
						</Col>
					</Container>
				</motion.section>

				<motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} className="pb-14 lg:pb-34">
					<Container className="lg:items-start">
						<Col className="lg:row-start-1" colStart={[2, null, null, 3]}>
							<SectionTitle>The Board</SectionTitle>
						</Col>
						<Col className="row-start-2" colStart={[1, null, null, 3, null]} colEnd={[27, null, null, 19, null]}>
							<Image alt="Photo of the board members" src="/images/board.jpg" width={942} height={508} />
						</Col>
						<Col className="h-full gap-y-6 border-l-tertiary pt-6 lg:row-start-2 lg:gap-0 lg:border-l lg:pl-9 lg:pt-2" colStart={[2, null, null, 20]} colEnd={[27, null, null, null]}>
							<span className="uppercase tracking-2xl text-white">Left to right</span>
							<ul className="mb-10 grid grid-cols-2 gap-y-4 gap-x-8 lg:grid-cols-1 lg:gap-y-8">
								<NameRole name="Paul Borghgraef" role="Director" />
								<NameRole name="Christian Beherman" role="President" />
								<NameRole name="Jacques P. Beherman" role="Managing director" />
								<NameRole name="Olivier Beherman" role="Director" />
								<NameRole name="Etienne Rosseeuw" role="Director" />
							</ul>
						</Col>
					</Container>
				</motion.section>
			</main>

			<Footer />
		</div>
	);
};

export default Page;
