import React, { useState } from 'react';
import {AdaptivityProvider, Button, Div, Counter} from "@vkontakte/vkui";
import {
    Icon12Add,
    Icon16Add,
    Icon24Add,
    Icon12Tag,
    Icon24ChevronCompactRight,
} from "@vkontakte/icons";

import "@vkontakte/vkui/dist/vkui.css";

let butStyle = {
    position: "absolute",
    top:0,
    left: "164px",
    padding: "4px 3px 5px",
    borderRadius: "20px",
}

const Button3 = () => {
    const [align] = useState("center");
    const [appearance] = useState("accent");
    const [sizeY] = useState("compact");
    const [stretched] = useState(false);
    const [disabled] = useState(false);
    const [size] = useState("s");
    const [loading] = useState(false);
    const [addBefore] = useState(false);
    const [addAfter] = useState(false);
    const [hasLink] = useState(false);

    const buttonBefore =
        addBefore &&
        (size === "s" ? (
            <Icon12Add aria-hidden />
        ) : size === "m" ? (
            <Icon16Add aria-hidden />
        ) : (
            <Icon24Add aria-hidden />
        ));
    const buttonAfter =
        addAfter &&
        (size === "s" ? (
            <Icon12Tag aria-hidden />
        ) : size === "m" ? (
            <Icon24ChevronCompactRight aria-hidden />
        ) : (
            <Counter>16</Counter>
        ));
    const buttonLink = hasLink ? "#" : undefined;

    return (
        <div style={{ display: "flex", flexDirection: "row-reverse",  }}>
            <AdaptivityProvider sizeY={sizeY}>
                <div
                    // style={{
                    //     background: appearance === "overlay" ? "#232323" : "unset",
                    //     ...containerStyles,
                    // }}
                >
                    {["secondary"].map((mode) => (
                        <Div style={{marginRight: "-15px"}}>
                            <Button style={butStyle} align={align}
                                href={buttonLink}
                                before={buttonBefore}
                                after={buttonAfter}
                                appearance={appearance}
                                stretched={stretched}
                                mode={mode}
                                disabled={disabled}
                                size={size}
                                loading={loading}
                            >
                                Бустеры
                            </Button>
                        </Div>
                    ))}
                </div>
            </AdaptivityProvider>
        </div>
    );
};

export default Button3;