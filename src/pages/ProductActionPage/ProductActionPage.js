import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {actAddProductsRequest, actGetProductsRequest, actUpdateProductsRequest} from '../../actions/index';
import {connect} from 'react-redux';
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

    UNSAFE_componentDidMount(){
        var {match} = this.props;
        if(match){
            var id = match.params.id;
            this.props.onEditProducts(id);
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps){       
        if(nextProps && nextProps.itemEditting){
            var {itemEditting} = nextProps;
            this.setState({
                id : itemEditting.id,
                txtName : itemEditting.name,
                txtPrice : itemEditting.price,
                chkbStatus : itemEditting.status
            });
        }
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
        var {id, txtName, txtPrice, chkbStatus } = this.state;
        var {history} = this.props;
        var products = {
            id : id,
            name : txtName,
            price : txtPrice,
            status : chkbStatus
        };

        if(id){ // UPDATE
            this.props.onUpdateProducts(products);
        }else{ // CREATE
            this.props.onAddProducts(products);
        }
        history.goBack();
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
                            <input 
                            type="checkbox"
                            name="chkbStatus"
                            value={chkbStatus}
                            onChange={this.onChange}
                            checked={chkbStatus}
                            />
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

const mapStateToProps = (state) => {
    return {
        itemEditting : state.itemEditting
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return{
        onAddProducts : (products) => {
            dispatch(actAddProductsRequest(products))
        },
        onEditProducts : (id) => {
            dispatch(actGetProductsRequest(id))
        },
        onUpdateProducts : (products) => {
            dispatch(actUpdateProductsRequest(products))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (ProductActionPage);
