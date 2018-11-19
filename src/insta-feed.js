import Instafeed from 'react-instafeed';
import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <div>
                <script src="http://cdn.lightwidget.com/widgets/lightwidget.js"></script>
                <iframe src="http://lightwidget.com/widgets/3f086900dc4351089c7e27d8013fd948.html" scrolling="no" allowtransparency="true" className="lightwidget-widget" style={{"width": "100%", height: "1000px", "border": 0, "overflow": "hidden"}}></iframe>
            </div>
        )
    }
}
