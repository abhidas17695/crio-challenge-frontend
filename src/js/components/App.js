import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import axios from 'axios';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.postImage = this.postImage.bind(this);
        this.showPreview = this.showPreview.bind(this);
    }
    postImage(e) {
        if (document.getElementById('orderId').value == "") {
            return;
        }
        var obj = {
            data: document.getElementById('preview').getAttribute('src'),
            orderId: document.getElementById('orderId').value,
            text: document.getElementById('text').value
        };
        axios.post('https://criochallenge.herokuapp.com:8080/qeats/v1/reviews/share', obj).then(res => {
            console.log(res.data);
            window.open("https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcriostorage.s3.ap-south-1.amazonaws.com%2F" + obj.orderId + "&amp;src=sdkpreparse");
        });
    }
    getBase64(file) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                resolve(reader.result);
            };
            reader.onerror = function (error) {
                reject(error);
            };
        });

    }
    showPreview(e) {
        var file = e.target.files[0]
        this.getBase64(file).then(res => {
            document.getElementById('preview').setAttribute('src', res);
        });
    }
    render() {
        return (
            <div>
                <form>
                    <input type="file" onInput={this.showPreview} id="fileUpload" accept="image/*" />
                    <input type="text" id="text" placeholder="Text" />
                    <input type="text" id="orderId" placeholder="Order Id" />
                </form>
                <div style={{ width: "500px", height: "500px", margin: "auto", border: "2px solid black" }}>
                    <img id="preview" src="" width="500px" height="500px" />
                </div>

                <div style={{ width: "150px", margin: "auto" }}>
                    <button onClick={this.postImage}>Share on Facebook</button>
                </div>

            </div>

        )
    }



}



