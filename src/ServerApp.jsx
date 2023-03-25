import { StaticRouter } from "react-router-dom/server";
import { renderToPipeableStream } from "react-dom/server";
import App from "./App";

export default function render(url, opts) {
    return renderToPipeableStream(
        <StaticRouter location={url}>
            <App />
        </StaticRouter>,
        opts
    );
}
