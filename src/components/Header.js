import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { styled } from '@mui/system'
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import { Badge, Container } from '@mui/material';

const Nav = styled('div')(
    {
        display: 'flex',
        padding: '10px',

    }
)
const Title = styled('h1')(
    {
        textAlign:'center',
        color:'#C7508D'

    }
)

export class Header extends Component {
    render() {
        return (
            <Container>
                <Title>E-Shoping</Title>
                <Nav style={{ fontSize: '25px' }}>
                    <Link to="/"style={{fontWeight:'bold',textDecoration:'none'}}>Products</Link>
                    <Link to="/Intro"style={{fontWeight:'bold',textDecoration:'none',justifyContent:'center',flex:1,display:'flex',marginLeft:'300px'}}>Introduction</Link>
                    <Link to="/carts" style={{flex:1,display:'flex',justifyContent:'flex-end',textDecoration:'none'}}>
                        <Badge badgeContent={this.props.numberCart} color="primary" style={{justifyContent:'flex-end'}}>
                            <ShoppingCartOutlined style={{ fontSize: '35px' }} />
                        </Badge>
                        &nbsp;Total Price: {Number(this.props.totalCart).toLocaleString('en-US')}$
                    </Link>
                </Nav>
            </Container>
        )
    }
}
const mapStateToProps = state => {
    let TotalCart=0;
    Object.keys(state._todoProduct.Carts).forEach(function(item){
        TotalCart+=state._todoProduct.Carts[item].quantity * state._todoProduct.Carts[item].price;
    });
    return {
        numberCart: state._todoProduct.numberCart,
        totalCart: TotalCart
    }
}
export default connect(mapStateToProps, null)(Header)
