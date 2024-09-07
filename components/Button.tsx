interface ButtonLinkProps{
    text: string;
    url: string
}

export function ButtonLink({text, url}: ButtonLinkProps){
    return (
        <a href={url} class="red-button">{text}</a>
    );
}