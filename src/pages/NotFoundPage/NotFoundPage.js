import React, { Component } from 'react';


class NotFoundPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="alert">
                    <button type="button" className="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                    <strong>404 NOT FOUND</strong>
                </div>
                
            </div>
        );
    }
}
export default NotFoundPage;
