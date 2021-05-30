import React from "react";

const Link = ({ className, href, children}) => {
    const onClick = (event) => {

        // if command or ctrl key are held on click, allow default behavior
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        // prevent full page reload
        event.preventDefault();

        // update URL
        window.history.pushState({}, "", href)

        //communicate to routes that the url has changed
        const navEvent = new PopStateEvent('popstate')
        window.dispatchEvent(navEvent);
    };

    return (
        <a className={className} href={href} onClick={onClick}>
            {children}
        </a>
    )
}

export default Link;