export default {
    authors: [
        {
            id:123,
            name:"Minh nguyen"
        },
        {
            id:999,
            name:"hoang minh"
        }
    ],
    folders: [
        {
            id: "1",
            name:"Home",
            createdAt:"2022-1-18T03:42:132",
            authorId:123,
        },
        {
            id: "2",
            name:"New folder",
            createdAt:"2022-11-18T03:42:132",
            authorId:999,
        },
        {
            id: "3",
            name:"Work",
            createdAt:"2022-12-18T03:42:132",
            authorId:2,
        },
    ],
    notes: [
        {
            id:'123',
            content:"<p>go to supermarket</p>",
            folderId:"1"
        },
        {
            id:'234',
            content:"<p>go to scholl</p>",
            folderId:"2"
        },
        {
            id:'456',
            content:"<p>go to park</p>",
            folderId:"1"
        },
    ]
}