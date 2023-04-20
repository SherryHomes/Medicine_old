import router from '@system.router';

export default {
    onclick1:function () {
        router.push({
            uri: "pages/mine/page1/page1"
        })
    },
    onclick2:function () {
        router.push({
            uri: "pages/mine/pageemergencycontact/pageemergencycontact"
        })
    },
    onclick3:function () {
        router.push({
            uri: "pages/mine/pageprivacy/pageprivacy"
        })
    },
    onclick4:function () {
        router.push({
            uri: "pages/mine/pagesetting/pagesetting"
        })
    }
}
