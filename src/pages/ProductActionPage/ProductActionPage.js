import React, { Component } from 'react';
import callAPI from '../../utils/apiCaller';
import { Link } from 'react-router-dom';

class ProductActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            chkbStatus: ''
        };
    }

    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSave = (e) => {
        e.preventDefault();
        var { txtName, txtPrice, chkbStatus } = this.state;
        var {history} = this.props;
        callAPI('products', 'POST', {
            name: txtName,
            price: txtPrice,
            status: chkbStatus
        }).then(res => {
            history.goBack();
        })
    }

    render() {
        var { txtName, txtPrice, chkbStatus } = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                <form onSubmit={this.onSave}>
                    <legend>Form title</legend>

                    <div className="form-group">
                        <label>Tên Sản Phẩm</label>
                        <input type="text" className="form-control" name="txtName" value={txtName} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Giá</label>
                        <input type="number" className="form-control" name="txtPrice" value={txtPrice} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Trạng Thái</label>
                    </div>

                    <div className="checkbox">
                        <label>
                            <input type="checkbox" name="chkbStatus" value={chkbStatus} onChange={this.onChange} />
                            Còn Hàng
                        </label>
                    </div>


                    <button type="submit" className="btn btn-primary mgr-10">Lưu Lại</button>
                    <Link to="/product-list" className="btn btn-danger">
                        Quay Lại
                    </Link>

                </form>

            </div>
        );
    }


}

export default ProductActionPage;
