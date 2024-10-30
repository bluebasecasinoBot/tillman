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
                    style:"display:flex;flex-direction:column;row-gap:10px;text-align:center;font-weight:900;align-items:flex-start;font-size:18px;padding:0 15px;" + __sC['txt_shade2'](),
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
                            style:"transform:translateX(0px);width:fit-content;margin-left:15px;"
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
                            style:"transform:translateX(25px);width:fit-content;margin-left:15px;"
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
                            style:"transform:translateX(55px);width:fit-content;margin-left:15px;"
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
                            style:"transform:translateX(75px);width:fit-content;margin-left:15px;"
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
                            style:"transform:translateX(95px);width:fit-content;margin-left:15px;"
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
