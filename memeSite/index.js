import {__c, __m, __sC, __sS, __SYD} from "./sydneyLib/sydneyDom_v2.js";

import "./indexMainComponent.js"

import "./indexMain2.js"

import "./indexMain3.js"

import "./indexMain4.js"

import "./nav.js"


__sS([
    {
        nameTag:"container",
        style:{
            height:"100vh",
            // minHeight:"fit-content",
            width:"100vw",
            background:"#e2bf98",
            display:"flex",
            flexDirection:"column",
            rowGap:"20px",
            alignItems:"center",
            overflowX:"hidden",
            position:"relative",
            paddingBottom:"100px"
        }
    },
    {
        nameTag:"floatingElement",
        style:{
            position:"absolute",
            bottom:"30px",
            right:"30px",
            left:"30px"
        }
    },
    {
        nameTag:"txt_shade1",
        style:{
            color:"#fff",
            textShadow:"-1px 1px 1px #000",
            fontFamily:"suncos"
        }
    },
    {
        nameTag:"txt_shade2",
        style:{
            color:"#e2bf98",
            textShadow:"-1px 1px 1px #000",
            fontFamily:"suncos"
        }
    },
    {
        nameTag:"txt_shade3",
        style:{
            color:"#c99649",
            textShadow:"-2px 2px 1px #000"
        }
    }
])

__SYD.container = () =>{
    return __c(
        "div",
        {
            style:__sC['container'](),
            class:"container_style"
        },
        [
            __SYD.nav(),
            __SYD.topHeaderText(),
            __c(
                "div",
                {
                    style:"width:100%;background-image:url('./design/first_bg.png');min-height:fit-content;" + __sC['container']({method:"use" , style:["display",'rowGap',"alignItems","flexDirection","position"]}),
                    class:"page1_sub"
                },
                [
                    __SYD.topPageImage(),
                    __SYD.page1_left_text(),
                    __SYD.page1_right_text()
                ],
                {
                    genericStyle:["bg_cover"]
                }
            ),
            __SYD.tokenomicsPage(),
            __SYD.imageBox1(),
            __SYD.imageBox2(),
            __SYD.imageBox3(),
            __SYD.imageBox4(),
            __SYD.imageBox5(),
            __SYD.roadMapPage(),
            __c(
                "div",
                {
                    style:"display:flex;flex-direction:column;row-gap:10px;width:100%;height:fit-content;padding:0 30px;align-items:center;"
                },
                [
                    __c("hr" , {style:"border:1px solid #fff;min-width:100%;"}),
                    __c(
                        "p",
                        {
                            style:"text-transform:uppercase;"+__sC["txt_shade1"]()
                        },
                        [
                            "$tillman   copyright - 2024"
                        ]
                    )
                ]
            )
        ]
    )
}

__SYD.topHeaderText = () =>{
    return __c(
        "h1",
        {
            style:"font-family:neon;color:#171717;text-align:center;width:100%;padding:20px 0;" + __sC['txt_shade3'](),
            class:"top_header_text"
        },
        [
            "$tillman skating dog"
        ]
    )
}

window.onload = () =>{
    __m(__SYD.container())
}