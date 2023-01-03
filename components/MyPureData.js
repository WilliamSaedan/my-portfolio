export default function Logo({className = ''}) {
    return (
        <div
            className={`${className}`}
            alt="PureData"
        >
            <img className="h-full w-full" src="./assets/svgs/Pure_Data_logo.svg" alt="PureData" />
        </div>
    );
}