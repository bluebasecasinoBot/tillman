import { __c, __sC, __SYD } from "./sydneyLib/sydneyDom_v2.js";

__SYD.tokenomicsPage = () =>{
    return __c(
        "div",
        {
            style:"min-height:fit-content;padding:70px 20px;width:100%;background-image:url('./design/p2_wave.jpg');background-position:0,0;background-size:130% 100%;column-gap:20px;justify-content:space-around;align-items:center;position:relative;" + __sC["container"]({method:"use" , style:['display','rowGap']}),
            class:"page2_flex"
        },
        [
            __c(
                "p",
                {
                    style:"display:flex;flex-direction:column;row-gap:10px;text-align:center;font-weight:900;align-items:center;font-size:18px;" + __sC['txt_shade2'](),
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
                            __c("span",{class:"h_one"},["🔥"])," $tillman tokenomics ",__c("span",{class:"h_two"},["🔥"])
                        ]
                    ),

                    __c(
                        "p",
                        {
                            style:"padding:5px;"
                        },
                        [
                            `
                            Tax zero / zero
                            `
                        ]
                    ),

                    __c(
                        "p",
                        {
                            style:"padding:5px;"
                        },
                        [
                            `
                            Lp burnt 🥵
                            `
                        ]
                    )
                ]
            ),

            __SYD.page2_image()

        ],
        {
            // genericStyle:['bg_cover']
        }
    )
}


__SYD.page2_image = () =>{
    return __c(
        "div",
        {
            style:"min-height:250px;min-width:250px;background-image:url('./design/tokenomic.jpg');border-radius:50%;box-shadow:3px 3px 1px #c99649;"
        },[],{genericStyle:['bg_fit']}
    )
}
