import $ from 'jquery'

const backendHost = 'http://7308994e.ngrok.io/TRUCKWEB2/'


export function signinDriver(params, callback, errorCallback) {
    let url = backendHost + 'CreateTruckerServlet'
    post(url, JSON.stringify(params), callback, errorCallback)
}

export function signinClient(params, callback, errorCallback) {
    let url = backendHost + 'auth/singin'
    post(url, JSON.stringify(params), callback, errorCallback)
}

function post(url, data, callback, errorCallback) {
    let endpoint = url;
    //before()
    $.ajax({
        method: 'post',
        url: endpoint,
        headers: {'Content-Type':'application/json'},
        crossDomain: true,
        data: data,
        dataType: "json",
        //dataType: "html",
        //mode: 'no-cors'
        success: function (response) {
            //success(response, callback, errorCallback)
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            //error(XMLHttpRequest, textStatus, errorThrown, errorCallback)
        }
    }).always(
        function (dataOrjqXHR, textStatus, jqXHRorErrorThrown) {
            //always()
        }
    )
}
