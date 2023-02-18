import Arrow from './Svg/Arrow';

const Cta = ({ outline = false }: { outline?: boolean }) => {
	return (
		<button
			className={`flex w-64 items-center justify-between rounded-full ${
				outline ? 'border border-accent bg-transparent' : 'bg-black'
			} px-10 py-6.5 font-jetbrains text-sm uppercase tracking-2xl text-white transition-colors duration-300 hover:border-secondary hover:bg-secondary`}
		>
			Contact us <Arrow />
		</button>
	);
};
export default Cta;
