/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        //location bar on or off
       // var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
       // window.alert('hello android');
        //ref.open() ;

    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        //app.receivedEvent('deviceready');
        window.open = cordova.InAppBrowser.open;
       // window.open('http://rsv-server:8089', '_self ', 'location=no');  //ok
       //window.open('http://rsv-server:8089/overcrowding', '_self ', 'location=no');  //ok
       //window.open('http://rsv-server:8089/manager', '_self ', 'location=no');    //ok
       window.open('http://rsv-server:8089/dbdir', '_self ', 'location=no');
//        document.getElementById("gotourl").addEventListener("click", this.openUrl);


    },

    openUrl: function() {
     console.log('Open URL ');

    var ref = cordova.InAppBrowser.open('http://example.com', '_blank', 'location=yes');
    ref.open() ;
     },


    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }

   /* $("#clickhere").on("click", function() {
    var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
              console.log( $( this ).text() );
            });*/

};

app.initialize();