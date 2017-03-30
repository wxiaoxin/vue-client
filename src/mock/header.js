import Mock from 'mockjs';

Mock.mock(/http:\/\/localhost:8888\/admin\/message\?/, "get", (options) => {
    return Mock.mock({
        "messages|3-5": [
            {
                "title": "@ctitle(4,6)",
                "summary": "@cparagraph(1)",
                "img": Mock.Random.image("100x100")
            }
        ],
        "total": 8
    })
});
