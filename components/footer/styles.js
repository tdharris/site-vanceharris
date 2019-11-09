import css from 'styled-jsx/css'

export default css`

a {
    text-decoration: none;
    color: inherit;
}

p a:hover {
    color: #BFBFBF;
}

footer {
    background-color: #212121;
    padding:55px 50px;
    bottom:0;
    color:#fff;
}

div.social-links {
  margin-top:20px;
  color:#fff;
}

.social-links a {
    display:inline-block;
    width:60px;
    height:60px;
    cursor:pointer;
    background-color:#2B2B2B;
    border-radius:2px;
    font-size:20px;
    color:#ffffff;
    text-align:center;
    line-height:60px;
    margin-right:5px;
    margin-bottom:5px;
}

.social-links a:hover {
    background-color: #fff;
    color: #212121;
}

span.new-line-span {
    display:block;
}

.footer-contacts i {
    background-color:#2B2B2B;
    color:#fff;
    font-size:22px;
    display:inline-block;
    width:60px;
    height:60px;
    border-radius:50%;
    text-align:center;
    line-height:60px;
    margin:10px 15px 10px 0;
}

.footer-contacts i:hover {
    background-color: #fff;
    color: #212121;
}

.footer-contacts p {
    display:inline-block;
    color:#ffffff;
    vertical-align:middle;
}

`
