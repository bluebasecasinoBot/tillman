import { __c, __sC, __sS, __SYD } from "./sydneyLib/sydneyDom_v2.js";

__sS([
    {
        nameTag:"round_btn",
        style:{
            height:"40px",
            width:"40px",
            borderRadius:"50%",
            boxShadow:"1.5px 1.5px 0px #000",
            backgroundColor:"#fff"
        }
    }
])

__SYD.topPageImage = () =>{
    return __c(
        "div",
        {
            style:`width:100%;height:100%;background-image:url("./design/first.jpg");`,
            class:"topPageImage"
        },
        [],
        {
            genericStyle:['bg_fit']
        }
    )
}


__SYD.page1_left_text = () =>{
    return __c(
        "p",
        {
            style:"min-height:fit-content;font-size:16px;font-weight:500;display:flex;flex-direction:column;row-gap:20px;padding:10px;" + __sC['floatingElement']([{method:"remove",style:['right' , 'position']}]) + __sC['txt_shade1'](),
            class:"paragraph_float_class"
        },
        [
            __c("p" , {style:"font-size:20px;text-transform:uppercase;margin-bottom:10px;width:fit-content;font-family:neon;color:#c99649;",class:"about_main_text"} , ["about $tillman"]),
            __c(
                "p",
                {style:"",class:"ad_text"},
                [
                    `In a world filled with ordinary pets, one extraordinary dog left a mark that will never be forgotten. Tillman, the world-renowned skateboarding bulldog, captured hearts and inspired millions with his incredible talent and playful spirit. With his Guinness World Record for skateboarding, Tillman didn’t just ride the waves of a board; he rode straight into our hearts.`
                ]
            ),
            __c(
                "p",
                {class:"ad_text"},
                [
                    `Now, we’re launching $TILLMAN, a meme coin dedicated to honoring his legacy. This coin isn’t just a currency; it’s a celebration of joy, adventure, and the unbreakable bond between pets and their humans. As we remember Tillman, we invite you to join us in spreading positivity and laughter in the crypto space.`
                ]
            ),
            __c(
                "p",
                {class:"ad_text"},
                [
                    `Each $TILLMAN coin represents a piece of Tillman’s spirit—a reminder to embrace life with enthusiasm and a sense of fun. With a community-driven approach, we aim to support animal welfare initiatives, ensuring that Tillman’s legacy lives on by helping other pets in need.`
                ]
            ),
            __c(
                "p",
                {class:"ad_text"},
                [
                    `Let’s roll together on this journey, just like Tillman on his skateboard. Grab your $TILLMAN, share the laughter, and let’s keep the spirit of this incredible dog alive!`
                ]
            )
        ]
    )
}


__SYD.page1_right_text = () =>{
    return __c(
        "div",
        {
            style:"min-height:fit-content;font-size:18px;font-weight:900;" + __sC['floatingElement']([
                {method:"remove",style:['left' , 'position']},
            ]) + __sC['container']([
                {method:"use",style:['display','flexDirection']},
                {method:"add",style:{rowGap:"10px"}}
            ]),
            class:"paragraph_float_class_div"
        },
        [
            __c(
                "div",
                {
                    style:"height:fit-content;padding:10px;width:100%;display:flex;column-gap:10px;",
                    class:"paragraph_float_class_div_child"
                },
                [
                    __c("a" , {href:"#",style:__sC['round_btn']({method:"add",style:{backgroundImage:"url(./design/tel.png)"}}),class:"h_one"}),
                    __c("a" , {href:"#",style:__sC['round_btn']({method:"add",style:{backgroundImage:"url(./design/x.png)",backgroundSize:"50%"}}),class:"h_two"}),
                    __c("a" , {href:"#",style:__sC['round_btn']({method:"add",style:{backgroundImage:"url(./design/inst.png)",backgroundSize:"60%"}}),class:"h_three"})
                ]
            ),
            __c(
                "div",
                {
                    style:"height:fit-content;padding:10px;width:100%;display:flex;",
                    class:"paragraph_float_class_div_child"
                },
                [
                    __c("div" , {style:"height:60px;width:200px;border:2px solid #171717;display:flex;align-items:center;justify-content:center;font-weight:900;background:#c99649;transform:rotateZ(-3deg);font-family:suncos;font-size:22px;border-radius:10px;cursor:pointer;"},["BUY $TILLMAN"])
                ]
            ),
        ]
    )
}
