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
             <div className="row">
             </div>
            <Title>E-Shoping</Title>
            <Nav>
                <Link to="/"style={{fontWeight:'bold',textDecoration:'none'}}>Products</Link>
                <Link to="/Intro"style={{fontWeight:'bold',textDecoration:'none',justifyContent:'center',flex:1,display:'flex',marginLeft:'300px'}}>Intro</Link>
                <Link to="/carts" style={{flex:1,display:'flex',justifyContent:'flex-end'}}>
                    <Badge badgeContent={this.props.numberCart} color="primary" style={{justifyContent:'flex-end'}}>
                        <ShoppingCartOutlined />
                    </Badge>
                </Link>
            </Nav>
            </Container>
        )
    }
}
const mapStateToProps = state => {
    return {
        numberCart: state._todoProduct.numberCart
    }
}
export default connect(mapStateToProps, null)(Header)
