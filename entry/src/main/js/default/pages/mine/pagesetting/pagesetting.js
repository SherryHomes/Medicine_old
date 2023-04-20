import router from '@system.router';

export default {
    onclick1:function () {
        router.push({
            uri: "pages/mine/pagenotification/pagenotification"
        })
    },
    onclick2:function () {
        router.push({
            uri: "pages/mine/pagemanagerment/pagemanagerment"
        })
    },
    onclick3:function () {
        router.push({
            uri: "pages/mine/pagebinding/pagebinding"
        })
    },
    back: function () {
        router.back()
    }
}