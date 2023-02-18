interface Props {
	name: string;
	role: string;
}

const NameRole = ({ name, role }: Props) => {
	return (
		<li className="flex flex-col">
			<strong className="font-normal tracking-wider text-white">{name}</strong>
			<span className="font-jetbrains text-sm tracking-widest text-accent">{role}</span>
		</li>
	);
};
export default NameRole;
