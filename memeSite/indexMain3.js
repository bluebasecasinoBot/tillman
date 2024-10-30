import { __c, __sC, __sS, __SYD } from "./sydneyLib/sydneyDom_v2.js";

__sS([
    {
        nameTag:"picBox",
        style:{
            height:"80vw",
            minHeight:"400px",
            maxHeight:"500px",
            width:"100%",
            maxWidth:"700px",
            position:"relative",
            overflow:"hidden"
        }
    }
])


__SYD.imageBox1 = () =>{
    return __c(
        "div",
        {
            style:__sC['picBox']({method:"add" , style:{}})
        },
        [
            __c(
                "div",
                {
                    style:"height:100%;width:calc(100% + 150px);position:absolute;top:0;left:0;background-image:url('./design/sea.jpg');background-position-y:calc(100%);",
                    class:"main3Image1"
                },
                [

                ],
                {
                    genericStyle:['bg_cover']
                }
            ),
            __c(
                "div",
                {
                    style:"height:100%;width:100%;position:absolute;top:0;left:0;background-image:url('./design/dog_skate.png')",
                    class:"main3Image2"
                },
                [

                ],
                {
                    genericStyle:['bg_fit']
                }
            )
        ]
    )
}


// __SYD.videoBox1 = () =>{
//     return __c(
//         "div",
//         {
//             style:"height:fit-content;width:fit-content;"
//         },
//         [
//             __c(
//                 "video",
//                 {
//                     style:__sC['picBox']({method:"add" , style:{background:"blue" , height:"auto"}})
//                 }
//             )
//         ]
//     )
// }

__SYD.imageBox2 = () =>{
    return __c(
        "div",
        {
            style:__sC['picBox']({method:"add" , style:{backgroundImage:"url(./design/dog_skateGif.gif)"}})
        },[],
        {
            genericStyle:['bg_cover']
        }
    )
}

__SYD.imageBox3 = () =>{
    return __c(
        "div",
        {
            style:__sC['picBox']({method:"add" , style:{backgroundImage:"url(./design/meme_skate1.jpg)"}})
        },[],
        {
            genericStyle:['bg_fit']
        }
    )
}

__SYD.imageBox4 = () =>{
    return __c(
        "div",
        {
            style:__sC['picBox']({method:"add" , style:{backgroundImage:"url(./design/meme_skate2.gif)"}})
        },[],
        {
            genericStyle:['bg_cover']
        }
    )
}
__SYD.imageBox5 = () =>{
    return __c(
        "div",
        {
            style:__sC['picBox']({method:"add" , style:{backgroundImage:"url(./design/meme_skate3.gif)"}})
        },[],
        {
            genericStyle:['bg_fit']
        }
    )
}