import { createGlobalStyle } from "styled-components";
import "./assets/css/clear.css"
import "./assets/css/jarallax.css"
import "./assets/css/bootstrap-grid.css"

import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  outline: none !important;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

*::selection {
  background: ${theme.colors.secondaryLight};
}

body {
  color: ${theme.colors.primary};
  line-height: 2;
  font-size: 15px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  min-width: 320px;
  position: relative;
  overflow-x: hidden;
  background: linear-gradient(to right, ${theme.colors.secondaryLight} 0%, ${theme.colors.secondaryLight} 60%, white 40%);
  background-position: center;
}

p {
  margin-bottom: 40px;
}

a {
  text-decoration: none;
  color: ${theme.colors.primary};
  transition: .35s ease-out;
}

a:hover {
  color: ${theme.colors.secondary};
}

.section a {
  font-weight: 700;
  color: ${theme.colors.secondary};
}

.section a:hover {
  color: ${theme.colors.primary};
}

.doc-loader {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 99999;
  background-color: #fff;
}

.block-right {
  margin-right: -100px;
}

.block-right .block-right {
  margin-right: 0;
}

img.block-right {
  max-width: calc(100% + 100px);
}

.content-670 {
  max-width: 670px;
}

.relative {
  position: relative;
}

.page-wrapper {
  pointer-events: auto;
  width: 100%;
  // background-color: #fff0f0;
  max-width: 800px;
}

.section h2.title {
  font-weight: 500;
  font-size: 26px;
  line-height: 150%;
  letter-spacing: 5px;
  margin-bottom: 40px;
}

.section {
  margin-top: 65px;
  padding-top: 85px;
}

.sectionF {
    margin-top: 65px;
    padding-top: 85px;
}

.single .section {
  min-height: 100vh;
}

.page-wrapper > section:first-of-type {
  margin-top: 0;
}

.page-wrapper > section:last-of-type {
  padding-bottom: 85px;
}

.section .section-des {
  margin-bottom: 40px;
}

/* ===================================
    2. Header / Menu CSS
====================================== */

.s-nav {
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    max-width: 40%;
    width: 100%;
    z-index: 1;
    overflow: hidden;
    padding: 85px 100px 85px 200px;
}

.nav-count {
    position: relative;
    line-height: 22px;
    font-weight: 700;
    margin-bottom: 154px;
}

.nav-count > div {
    position: relative;
    display: inline-block;
    vertical-align: top;
}

.nav-count .current-num {
    width: 18px;
}

.nav-count .current-num span {
    left: 0;
    top: 0;
    position: absolute;
    color: ${theme.colors.secondary};
}

.nav-count .pagination-sep {
    padding: 0 12px;
}

.nav-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.nav-list li a {
    display: inline-block;
}

.nav-list li.current a {
    color: ${theme.colors.secondary};
}

.nav-list li ul {
    padding-left: 28px;
    display: none;
    width: 100% !important;
}

.nav-soc {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    left: 200px;
    bottom: 79px;
}

.nav-soc li {
    margin-right: 15px;
}

.nav-soc li:last-child {
    margin-right: 0;
}

.nav-soc li a {
    width: 35px;
    height: 35px;
    display: block;
    // font-size: 12px;
    line-height: 30px;
    // letter-spacing: 5px;
}

.nav-container .site-title {
    font-size: 12px;
    line-height: 30px;
    letter-spacing: 5px;
    font-weight: 700;
    margin-bottom: 51px;    
    position: relative;
    display: inline-block;
}

.nav-container .site-title:before {
    content: '';
    position: absolute;
    bottom: -3px;
    right: 5px;
    height: 2px;
    width: calc(100% - 5px);
    transition: .35s ease-out;
    background-color: ${theme.colors.primary};
}

.nav-container .site-title:hover:before {
    width: 0;
    background-color: ${theme.colors.secondary};
}

.nav-btn {
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    padding: 14px 10px;
    transition: .15s ease;
    cursor: pointer;
    z-index: 10;
    background-color: #fff;
}

.nav-btn.scroll-bottom {
    top: -50px;
}

.nav-btn:hover .nav-btn-cover:before {
    margin-left: 9px;
}

.nav-btn:hover .nav-btn-cover .menu-line {
    margin-left: 17px;
}

.nav-btn.active .nav-btn-cover .menu-line {
    opacity: 0;
}

.nav-btn.active .nav-btn-cover:before {
    transform: rotate3d(0, 0, 1, 45deg) translate3d(0, 0, 0);
    margin-left: 0;
    width: 26px;
}

.nav-btn.active .nav-btn-cover:after {
    transform: rotate3d(0, 0, 1, -45deg);
    width: 26px;
}

.nav-btn .nav-btn-cover {
    position: relative;
    height: 20px;
    width: 30px;
    display: block;
}

.nav-btn .nav-btn-cover .menu-line {
    width: 13px;
    height: 3px;
    position: absolute;
    transition: all 0.25s;
    margin-left: 0;
    top: 8px;
    background-color: ${theme.colors.primary};
}

.nav-btn .nav-btn-cover:after, 
.nav-btn .nav-btn-cover:before {
    content: '';
    height: 3px;
    width: 30px;
    position: absolute;
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    -webkit-transition: -webkit-transform 0.25s;
    -webkit-transition: all 0.25s;
    transition: all 0.25s;
    top: 8px;
    background-color: ${theme.colors.primary};
}

.nav-btn .nav-btn-cover:before {
    transform: translate3d(0, -8px, 0px);
    width: 21px;
    margin-left: 0;
}

.nav-btn .nav-btn-cover:after {
    transform: translate3d(0, 8px, 0);
}

@media (min-width: 1200px) {

    .nav-btn {
        display: none;
    }
}


/* ===================================
    3. Home Section CSS
====================================== */

#home {
    height: 100vh;
    padding: 85px 0;
    margin: 0;
}

#home .container-wrap {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    height: 100%;
}

#home .main-photo {
    max-height: calc(100vh - 170px);
    width: 536px;
    object-fit: cover;
}

#home .entry-title {
    position: absolute;
    color: ${theme.colors.secondary};
    font-weight: 800;
    font-size: 110px;
    line-height: 113px;
    letter-spacing: -4px;
    z-index: 1;   
    left: 0;    
}

#home .entry-title span {
    text-decoration: underline;
}

#home .main-btn {
    position: absolute;
    bottom: 0;
    left: 0;
    cursor: pointer;
}

#home .main-btn img {
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;
    animation-name: scroll;
    display: block;
}

@keyframes scroll {

    0% {
        opacity: 1;
        transform: translateY(-25px);
    }
    70% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: translateY(0);
    }

}


/* ===================================
    4. Service Section CSS
====================================== */

.section-des {
    max-width: 440px;
    font-size: 22px;
    line-height: 1.65;
}

.serv-link-cover {
    background-color: ${theme.colors.secondary};
    display: flex;
    align-items: center;
    padding: 50px 70px;
    margin-top: 45px;
}

.serv-link-cover li + li {
    margin-left: 100px;
}

.serv-link-cover a {
    color: #fff;
    font-weight: 700;
    font-size: 12px;
    line-height: 30px;
    letter-spacing: 5px;
    position: relative;
    display: inline-block;
}

.serv-link-cover a:before {
    content: '';
    position: absolute;
    bottom: 5px;
    right: 0;
    height: 2px;
    width: 100%;
    transition: .35s ease-out;
    background-color: #fff;
}

.serv-link-cover a:hover:before {
    width: 0;
}

.serv-block-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 80px;
}

.serv-block-wrap > div:nth-last-of-type(-n+2) {
    margin-bottom: 0;
}

.serv-block-wrap .serv-block-item {
    width: calc(50% - 65px);
    margin-bottom: 80px;
}

.serv-block-wrap .serv-block-item:hover h4 {
    transform: translateX(-10px);
}

.serv-block-wrap .serv-block-item h4 {
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.27em;
    margin-top: 30px;
    transition: .35s ease-out;
}

.serv-block-wrap .serv-block-item p {
    margin-top: 23px;
    max-width: 250px;
    margin-bottom: 0;
}


/* ===================================
    5. About Section CSS
====================================== */

.about-img {
    max-width: 100%;
    display: block;
}

.about-info {
    background-color: ${theme.colors.secondary};
    color: #fff;
    width: 330px;
    padding: 50px 30px 50px 70px;
    float: right;
    margin: 0 0 40px 65px;
}

.about-info li + li {
    margin-top: 44px;
}

.about-info h6 {
    font-size: 12px;
    letter-spacing: 5px;
    font-weight: 400;
}

.about-info a {
    color: #fff;
    display: inline-block;
    font-weight: 400;
}

.about-info a:hover {
    padding-left: 8px;
}

.about-text {
    padding-top: 53px;
}

.about-text p {
    max-width: 670px;
}

.signature {
    // width: 256px;
    // margin-top: 10px;
    width: 300px;
    margin-top: -10px;
    margin-left: -30px;
}

/* ===================================
    8. Skills Section CSS
====================================== */

.skills-history {
    background-color: ${theme.colors.secondary};
    color: #fff;
    margin-top: 41px;
    padding: 63px 60px 62px 94px;
}

.skills-history li {
    display: flex;
    align-items: center;
    position: relative;
}

.skills-history li:before {
    content: '';
    position: absolute;
    left: 28%;
    top: 0;
    background-color: #fff;
    width: 3px;
    height: 100%;
}

.skills-history li + li {
    padding-top: 37px;
}

.skills-history li .date {
    flex: 0 0 28%;
    max-width: 28%;
    font-weight: 200;
    font-size: 60px;
    line-height: 30px;
    transition: .35s ease-out;
}

.skills-history li:hover .date {
    -webkit-transform: translateX(15px);
    transform: translateX(15px);
    color: ${theme.colors.primary};
}

.skills-history li .company {
    font-size: 13px;
    font-weight: 100;
    font-style: italic;
}

.skills-history li p {
    flex: 0 0 72%;
    max-width: 72%;
    padding: 0 50px 0 80px;
    cursor: default;
    transition: .35s ease-out;
    margin-bottom: 0;
    line-height: 20px;
}

.skills-history li:hover p {
    -webkit-transform: translateX(-15px);
    transform: translateX(-15px);
}

.skills-progress {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-right: 40px;
    padding-top: 69px;
}

.skills-progress li {
    display: flex;
    align-items: center;
    width: calc(50% - 35px);
    margin-bottom: 22px;
}

.skills-progress .name {
    font-size: 12px;
    line-height: 28px;
    letter-spacing: 3.5px;    
    width: 37%;
    padding-right: 30px;
}

.skills-progress .skill {
    width: 100%;
    height: 10px;
    background-color: ${theme.colors.secondaryLight};
    width: 63%;
}

.skills-progress .skill-fill {
    width: 10%;
    height: 10px;
    background-color: ${theme.colors.secondary};
    transition: width .7s;
}


/* ===================================
    9. Contact Section CSS
====================================== */

.contact-form {
    margin-top: 40px
}

.contact-form * {
    overflow: hidden;
}

.contact-form p {
    margin-bottom: 0;
}

.contact-form input[type=text], 
.contact-form input[type=email], 
.contact-form textarea {
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    line-height: 25px;
    letter-spacing: 3px;
    color: ${theme.colors.primary};
    background-color: transparent;
    border: 0;
    border-bottom: 2px solid;
    padding-top: 13px;
    padding-bottom: 0px;
    padding-left: 0;
    margin: 10px 0;
    height: 28px;
    width: 100%;
    box-sizing: initial;
}

.contact-form input[name="your-name"] {
    margin-top: 0;
    padding-top: 0;
}

.contact-form textarea {
    height: 150px;
}

p.contact-submit-holder {
    margin-top: 30px;
    margin-bottom: 0 !important;
}

.contact-form input[type=submit] {
    display: inline-block;
    border: 2px solid;
    text-align: center;
    padding: 20px 0px;
    font-size: 14px;
    cursor: pointer;
    vertical-align: middle;
    text-decoration: none;
    background-color: transparent;
    color: ${theme.colors.primary};
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    width: 100%;
    letter-spacing: 8px;
    transition: opacity .3s ease;
    cursor: pointer;
}

.contact-form input[type=submit]:hover {
    opacity: 0.8;
}

.contact-form input[type=text]::-webkit-input-placeholder, 
.contact-form input[type=email]::-webkit-input-placeholder, 
.contact-form textarea::-webkit-input-placeholder {
    font-family: 'Poppins', sans-serif;
    color: ${theme.colors.primary};
    font-weight: 400;
    font-size: 12px;
    line-height: 25px;    
    opacity: 1;  
}

.contact-form input[type=text]:-ms-input-placeholder, 
.contact-form input[type=email]:-ms-input-placeholder, 
.contact-form textarea:-ms-input-placeholder {
    font-family: 'Poppins', sans-serif;
    color: ${theme.colors.primary};
    font-weight: 400;
    font-size: 12px;
    line-height: 25px;    
    opacity: 1;  
}

.contact-form input[type=text]::placeholder, 
.contact-form input[type=email]::placeholder, 
.contact-form textarea::placeholder {
    font-family: 'Poppins', sans-serif;
    color: ${theme.colors.primary};
    font-weight: 400;
    font-size: 12px;
    line-height: 25px;
    opacity: 1;    
}

/* ===================================
    11. Responsive CSS
====================================== */

@media (max-width: 1366px) {

    .s-nav {
        padding: 60px 100px 60px 200px;
    }

    .nav-soc {
        bottom: 50px;
    }

    .nav-count {
        margin-bottom: 130px;
    }

    #home {
        padding: 60px 0;
    }

    #home .main-photo {
        width: 470px;
        max-height: calc(100vh - 120px);
    }

    #home .main-btn img {
        width: 40px;
    }


    .block-right {
        margin-right: -60px;
    }

    img.block-right {
        max-width: calc(100% + 60px);
    }

}

@media (min-width: 1200px) and (max-height: 660px) {

    .nav-count {
        margin-bottom: 80px;
    }

    #home .main-photo {
        width: 440px;
    }

    #home .entry-title {
        font-size: 110px;
        line-height: 113px;
    }

}

@media (max-width: 1199px) {

    .page-wrapper {
        margin: 0 auto;
    }

    .s-nav {
        right: auto;
        left: -100%;
        pointer-events: none;
        background-color: #fff;
        max-width: 300px;
        width: 100%;
        z-index: 9;
        padding: 80px 30px 60px;
        overflow: auto;
        height: 100%;
        transition: .25s ease-in;
    }

    .s-nav.active {
        transition: .25s ease-out;
        box-shadow: 0 0 4px rgba(255, 240, 240, 0.5);
        left: 0;
        pointer-events: auto;
    }

    .dropdown {
        cursor: pointer;
    }

    .dropdown > a {
        pointer-events: none;
    }

    .nav-count {
        margin-bottom: 50px;
    }

    .nav-soc {
        left: 15px;
        bottom: 65px;
    }

    .nav-container {
        padding-bottom: 60px;
    }

    .section {
        margin-top: 0;
        padding-top: 80px;
    }

    .section {
        padding-top: 55px;
    }

    .page-wrapper > section:last-of-type {
        padding-bottom: 55px;
    }

    [data-jarallax-element] {
        transform: none !important;
    }

}

@media (max-width: 1199px) and (max-height: 550px) {

    .nav-soc {
        position: relative;
        left: auto;
        bottom: auto;
    }

    .nav-container {
        padding-bottom: 60px;
    }

}

@media (max-width: 1020px) {

    body {
        background: ${theme.colors.secondaryLight};
    }

}

@media (max-width: 991px) {

    #home {
        display: flex;
        align-items: center;
    }

    #home .entry-title {
        font-size: 90px;
        line-height: 113px;
    }

    .serv-block-wrap .serv-block-item {
        margin-bottom: 65px;
    }    

    .block-right {
        margin-right: 0;
    }

    img.block-right {
        max-width: 100%;
    }

    .container-wrap {
        width: 100%;
    }

    .home-blog-list li {
        min-height: 120px;
    }

    .home-blog-list li a {
        font-size: 22px;
    }

    .home-blog-list li p {
        padding: 0 40px 0 50px;
    }   
    .about-info {
        margin: 0 0 40px 40px;
    }

}

@media (max-width: 767px) {    

    .nav-btn {
        background-color: #fff;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 2;
    }

    .s-nav {
        z-index: 2;
        padding: 40px 15px 60px;
        margin-top: 46px;
    }

    .page-wrapper {
        margin-top: 48px;
    }

    .nav-count {
        position: fixed;
        top: 12px;
        right: 15px;
        display: block;
        opacity: 1;
    }

    #home .main-photo {
        width: auto;
        max-height: 500px;
        max-width: 65%;
    }

    #home .entry-title {
        font-size: 70px;
        line-height: 73px;
        max-width: 340px;
        letter-spacing: -2px;
    }

    #home {
        padding: 55px 0 0;
        height: auto;
    }

    .serv-link-cover {
        padding: 40px 50px;
    }

    .serv-block-wrap {
        padding-top: 80px;
    }

    .serv-block-wrap .serv-block-item {
        width: calc(50% - 15px);
    }

    .serv-block-wrap .serv-block-item img {
        max-height: 60px;
    }    

    .serv-block-wrap .serv-block-item p {
        margin-top: 15px;
    }

    .serv-block-wrap .serv-block-item h4 {
        font-size: 18px;
        margin-top: 10px;
        line-height: 22px;
    }

    .about-text {
        padding-top: 45px;
    }

    .about-info {
        width: 280px;
        padding: 50px 30px 50px 40px;
    }   

    .home-blog-list {
        padding-right: 20px;
    }

    .home-blog-list li a {
        font-size: 20px;
        line-height: 1.5;
    }    

    .skills-history {
        padding: 62px 30px 62px 30px;
    }

    .skills-history li .date {
        font-size: 46px;
    }

    .skills-history li p {
        padding: 0 20px 0 50px;
    }

    .skills-progress {
        padding-right: 0;
    }

    .skills-progress li {
        width: 100%;
    }    

}

@media (max-width: 575px) {

    #home .main-photo {
        max-width: 85%;
    }

    #home .entry-title {
        font-size: 56px;
        line-height: 62px;
        padding: 50px 0;
    }

    p,
    .section h2.title,
    .section .section-des,
    .single-blog .thumbnail-img {
        margin-bottom: 20px;
    }

    .section-des {
        font-size: 18px;
    }

    .s-nav {
        max-width: 100%;
    }

    .serv-link-cover {
        flex-wrap: wrap;
    }

    .serv-link-cover li {
        width: 100%;
    }

    .serv-link-cover li + li {
        margin-left: 0;
        margin-top: 20px;
    }

    .serv-block-wrap .serv-block-item {
        width: 100%;
        margin-bottom: 40px;
    }

    .serv-block-wrap > div:nth-last-of-type(2) {

        margin-bottom: 40px;
    }

    .serv-block-wrap .serv-block-item p {
        max-width: 100%;
    }

    .about-info {
        padding: 30px;
        margin: 0 0 40px 0px;
        float: none;
        width: 100%;
    }

    .about-info li + li {
        margin-top: 20px;
    }

    .about-text {
        padding-top: 0;
    }        

    .signature {
        max-width: 100%;
    }

    .grid-sizer, 
    .grid-item {
        width: 100% !important;
    }

    .home-blog-list li {
        flex-wrap: wrap;
    }

    .home-blog-list li a {
        margin-right: 0;
    }

    .home-blog-list li .blog-list-info {
        width: 100%;
        margin-top: 10px;
    }

    .skills-history li {
        flex-wrap: wrap;
    }

    .skills-history li + li {
        padding-top: 60px;
    }

    .skills-history li:before {
        display: none;
    }

    .skills-history li p,
    .skills-history li .date {
        flex: 0 0 100%;
        max-width: 100%;
        transform: none !important;
    }

    .skills-history li p {
        padding: 0;
    }

    .skills-history li .date {
        margin-bottom: 20px;
    }

    .skills-progress li {
        flex-wrap: wrap;
    }

    .skills-progress li .name {
        width: 100%;
        margin-bottom: 5px;
    }

    .skills-progress li .skill {
        width: 100%;
    }    

    .single-blog .content-670 blockquote {
        max-width: 100%;
        width: 100%;
        float: none;
        margin-left: 0;
    }

}
`;

export default GlobalStyle;
