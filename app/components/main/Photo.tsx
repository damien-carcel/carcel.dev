import me from '~/images/me.jpg';

export default function Photo() {
    return (
        <div className="photo">
            <img alt="me.jpg" src={me} />
        </div>
    );
}
