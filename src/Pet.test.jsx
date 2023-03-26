import { test, expect } from "vitest";
import Pet from "./Pet";
import { render } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server.mjs";

test("display default thumbnail", async () => {
    //    AAA - arrange act assert
    const pet = render(
        <StaticRouter>
            <Pet />
        </StaticRouter>
    );

    const petThumbnail = await pet.findByTestId("thumbnail");

    expect(petThumbnail.src).toContain("none.jpg");

    pet.unmount();
});

test("displays a non-default thumbnail", async () => {
    const pet = render(
        <StaticRouter>
            <Pet images={["1.jpg", "2.jpg", "3.jpg"]} />
        </StaticRouter>
    );

    const petThumbnail = await pet.findByTestId("thumbnail");

    expect(petThumbnail.src).toContain("1.jpg");

    pet.unmount();
});
