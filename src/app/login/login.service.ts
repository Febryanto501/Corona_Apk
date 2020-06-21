import { Injectable } from "@angular/core";
const firebase = require("nativescript-plugin-firebase");

@Injectable({ providedIn: "root" })
export class LoginService {
    constructor() {}

    isLoggedIn() {
        return new Promise((resolve, reject) => {
            firebase
                .getCurrentUser()
                .then((user) => {
                    // user ada, artinya sudah login
                    resolve(user);
                })
                .catch((err) => {
                    // user tidak ada, artinya belum login/login sudah kedaluwarsa
                    reject(err);
                });
        });
    }

    login() {
        return new Promise((resolve, reject) => {
            firebase
                .login({
                    type: firebase.LoginType.GOOGLE,
                })
                .then(
                    function (result) {
                        // login berhasil
                        JSON.stringify(result);
                        resolve(result);
                    },
                    function (errorMessage) {
                        // login gagal
                        console.log(errorMessage);
                        reject(errorMessage);
                    }
                );
        });
    }

    logout() {
        firebase.logout();
    }
}
