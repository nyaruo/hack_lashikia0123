import React, { useState, useCallback } from 'react';
import { TextInput } from "./login/index";
const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [username, setUsername] = useState("")

    const inputEmail = useCallback((e) => {
        setEmail(e.target.value)
    }, [setEmail]);

    const inputPassword = useCallback((e) => {
        setPassword(e.target.value)
    }, [setPassword]);

    const inputConfirmPassword = useCallback((e) => {
        setConfirmPassword(e.target.value)
    }, [setConfirmPassword]);

    const inputUsername = useCallback((e) => {
        setUsername(e.target.value)
    }, [setUsername]);

    return (
        <div className="m-0 m-auto max-w-md p-4 h-auto">
            <h2 className="bg-white pt-6 pb-4 font-bold rounded text-xl">アカウント登録</h2>
            <div className="h-8" />
            <TextInput
                fullWidth={true} label={"ユーザー名"} multiline={false} required={true}
                rows={1} value={username} type={"text"} onChange={inputUsername}
            />
            <TextInput
                fullWidth={true} label={"メールアドレス"} multiline={false} required={true}
                rows={1} value={email} type={"email"} onChange={inputEmail}
            />
            <TextInput
                fullWidth={true} label={"パスワード（半角英数字で6文字以上）"} multiline={false} required={true}
                rows={1} value={password} type={"password"} onChange={inputPassword}
            />
            <TextInput
                fullWidth={true} label={"パスワードの再確認"} multiline={false} required={true}
                rows={1} value={confirmPassword} type={"password"} onChange={inputConfirmPassword}
            />
            <div className="h-8" />
            <div className="m-0 m-auto text-center">
                <div className="h-5 hover:bg-gray-700">
                    <p className="text-base" onClick={console.log("test")}>アカウントをお持ちの方はこちら</p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
