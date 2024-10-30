import { __SYD, __c } from './sydneyLib/sydneyDom_v2.js'

__SYD.nav = () =>{
    const el = () =>{
        const element = [];
        for(let i = 0; i < 15; i++)
        {
            element.push(__SYD.addNavElement())
        }
        return element
    }
    return __c(
        'div',
        {
            style:'height:50px;width:100vw;position:fixed;bottom:0;z-index:500;border-bottom:2px solid #e2bf98;border-top:2px solid #e2bf98;'
        },
        [
            __c(
                'div',
                {
                    style:'height:100%;min-width:fit-content;background:#efc441;display:flex;column-gap:70px;padding:0 15px;',
                    class:"slider_anime"
                },
                [
                    ...el()
                ]
            )
        ]
    )
}
__SYD.addNavElement = () =>{
    return __c(
        'div',
        {
            style:'height:100%;width:fit-content;display:flex;column-gap:15px;align-items:center'
        },
        [
            __c('img',{height:'50px',width:'50px',alt:'dog',style:"border-radius:50%;min-height:50px;min-width:50px;",src:'./design/dog_skate.png'},[]),
            __c('p',{style:'font-family:neon;font-size:14px;font-weight:900;width:max-content;'},['$Tillman'])
        ]
    )
}