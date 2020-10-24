type Props = {
    children: React.ReactNode;
};

const Card = (props: Props) => <div className="rounded-xl shadow-xl bg-white p-4">{props.children}</div>;

export default Card;
