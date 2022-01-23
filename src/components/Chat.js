import React, { useState } from "react";
import { useEffect } from "react"
import { messagesRef, pushMessage } from "../firebase"
import firebase, { storage } from "../firebase";

function Chat() {
    // chat
    const [name, setName] = useState("default")
    const [text, setText] = useState("text")
    const [messages, setMessages] = useState([])

    useEffect(() => {
        messagesRef
            .orderByKey()
            .limitToLast(10)
            .on("value", (snapshot) => {
                const messages = snapshot.val()
                if (messages === null) return
                const entries = Object.entries(messages)
                const newMessages = entries.map((data) => {
                    const [key, message] = data
                    return { key, ...message }
                })
                setMessages(newMessages)
            })
    }, [])
    // chat end

    const [image, setImage] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const handleImage = event => {
        const image = event.target.files[0];
        setImage(image);
    };

    const onSubmit = event => {
        event.preventDefault();
        if (image === "") {
            console.log("ファイルが選択されていません");
        }
        // アップロード処理
        const uploadTask = storage.ref(`/images/${image.name}`).put(image);
        uploadTask.on(
            firebase.storage.TaskEvent.STATE_CHANGED,
            next,
            error,
            complete
        );
    };
    const next = snapshot => {
        // 進行中のsnapshotを得る
        // アップロードの進行度を表示
        const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(percent + "% done");
        console.log(snapshot);
    };
    const error = error => {
        // エラーハンドリング
        console.log(error);
    };
    const complete = () => {
        // 完了後の処理
        // 画像表示のため、アップロードした画像のURLを取得
        storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then(fireBaseUrl => {
                setImageUrl(fireBaseUrl);
            });
    };
    return (
        <>
            <div className="flex justify-center items-center flex-col">
                <p className="font-bold my-1">Root</p>
                <>
                    {messages.map((message) => (
                        <div key={message.key}>
                            {message.name}:{message.text}
                        </div>
                    ))}
                    <input
                        type="text"
                        value={name}
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        onChange={(e) => setName((name) => (name = e.target.value))}
                    />
                    <input
                        type="text"
                        value={text}
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        onChange={(e) => setText((text) => (text = e.target.value))}
                    />
                    <button onClick={() => pushMessage({ name: name, text: text })}>
                        push
                    </button>
                    <div>
                        <div style={{ height: "100px" }} ></div>
                    </div>
                </>
            </div>

            <div style={{ height: "100px" }}>
                <h1>画像アップロード</h1>
                <form onSubmit={onSubmit}>
                    <input type="file" onChange={handleImage} />
                    <button>Upload</button>
                </form>
                <img src={imageUrl} alt="uploaded" />
            </div>
        </>
    );
}

export default Chat;

// import { useState, useEffect } from "react"
// import { messagesRef, pushMessage } from "../firebase"
// import CreateImg from './CreateImg';

// const Chat = () => {
//     const [name, setName] = useState("default")
//     const [text, setText] = useState("text")
//     const [messages, setMessages] = useState([])

//     useEffect(() => {
//         messagesRef
//             .orderByKey()
//             .limitToLast(10)
//             .on("value", (snapshot) => {
//                 const messages = snapshot.val()
//                 if (messages === null) return
//                 const entries = Object.entries(messages)
//                 const newMessages = entries.map((data) => {
//                     const [key, message] = data
//                     return { key, ...message }
//                 })
//                 setMessages(newMessages)
//             })
//     }, [])


//     return (
        // <div className="flex justify-center items-center flex-col">
        //     <p className="font-bold my-1">Root</p>
        //     <>
        //         {messages.map((message) => (
        //             <div key={message.key}>
        //                 {message.name}:{message.text}
        //             </div>
        //         ))}
        //         <input
        //             type="text"
        //             value={name}
        //             // eslint-disable-next-line @typescript-eslint/no-unused-vars
        //             onChange={(e) => setName((name) => (name = e.target.value))}
        //         />
        //         <input
        //             type="text"
        //             value={text}
        //             // eslint-disable-next-line @typescript-eslint/no-unused-vars
        //             onChange={(e) => setText((text) => (text = e.target.value))}
        //         />
        //         <button onClick={() => pushMessage({ name: name, text: text })}>
        //             push
        //         </button>
        //         <div>
        //             <div style={{ height: "100px" }} ></div>
        //             <CreateImg />
        //         </div>
        //     </>
        // </div>
//     )
// }
// export default Chat