import { __c, __sC, __SYD } from "./sydneyLib/sydneyDom_v2.js";

__SYD.roadMapPage = () =>{
    return __c(
        "div",
        {
            style:"min-height:fit-content;padding:180px 0;width:100%;background-image:url('./design/roadMap.png');background-position:0,0;column-gap:20px;justify-content:space-around;align-items:center;position:relative;" + __sC["container"]({method:"use" , style:['display','rowGap']}),
            class:"page4_flex"
        },
        [
            __c(
                "p",
                {
                    style:"display:flex;flex-direction:column;row-gap:10px;text-align:center;font-weight:900;align-items:center;font-size:18px;padding:0 15px;" + __sC['txt_shade1'](),
                    class:"page2_text"
                },
                [
                    __c(
                        "p",
                        {
                            style:"font-size:25px;font-weight:900;text-transform:capitalize;margin-bottom:10px;width:fit-content;font-family:neon;color:#c99649;",
                            class:"tokenomic_text"
                        },
                        [
                            "$tillman roadmap"
                        ]
                    ),

                    __c(
                        "p",
                        {
                            style:"background:#e2bf98;padding:10px;transform:translateX(-50px);width:100px;margin-left:15px;box-shadow:-2px 2px 1px #000;border-radius:10px;"
                        },
                        [
                            `
                                We
                            `
                        ]
                    ),
                    __c(
                        "p",
                        {
                            style:"background:#e2bf98;padding:10px;transform:translateX(50px);width:100px;margin-left:15px;box-shadow:-2px 2px 1px #000;border-radius:10px;"
                        },
                        [
                            `
                                Stake
                            `
                        ]
                    ),
                    __c(
                        "p",
                        {
                            style:"background:#e2bf98;padding:10px;transform:translateX(-50px);width:100px;margin-left:15px;box-shadow:-2px 2px 1px #000;border-radius:10px;"
                        },
                        [
                            `
                                To
                            `
                        ]
                    ),
                    __c(
                        "p",
                        {
                            style:"background:#e2bf98;padding:10px;transform:translateX(50px);width:100px;margin-left:15px;box-shadow:-2px 2px 1px #000;border-radius:10px;"
                        },
                        [
                            `
                                Da
                            `
                        ]
                    ),
                    __c(
                        "p",
                        {
                            style:"background:#e2bf98;padding:10px;transform:translateX(-50px);width:100px;margin-left:15px;box-shadow:-2px 2px 1px #000;border-radius:10px;"
                        },
                        [
                            `
                                Moon
                            `
                        ]
                    )
                ]
            ),

            __SYD.page4_image()

        ]
    )
}


__SYD.page4_image = () =>{
    return __c(
        "div",
        {
            style:"min-height:250px;min-width:250px;border-radius:50%;background-image:url('./design/raodmapBg.jpg');box-shadow:3px 3px 1px #c99649;"
        },[],{genericStyle:['bg_fit']}
    )
}
