"use client"
import styles from './page.module.css'
import Typical from 'react-typical'
import { Row,Col, Container } from 'react-bootstrap'

export default function Home() {

  const user={
    instagram:"https://www.instagram.com/invites/contact/?i=15qth0sqh0b53&utm_content=kixv2g6",
    linkedIn:"https://www.linkedin.com/in/himanshu-gupta-28a6ba207",
    github:"https://github.com/HimanshuGupta-p1",
    facebook:"https://www.facebook.com/profile.php?id=100017297291417",
    codepen:"https://codepen.io/Himanshu_Styles"
};

  return (
    <main className={styles.main}>
                  <br/>
            <Container>
                <Row>
                    <Col lg={{span:5, offset:2}} className='glow-text'>
                    
                    <p style={{ margin:"20px" ,fontWeight:"bold" ,fontSize:"5vh" }}>HI, I'M<br/> HIMANSHU GUPTA <img src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif" style={{width:"50px",height:"50px"}} alt="" /></p>
                    <p style={{margin:"20px 20px", fontWeight:"bold",fontSize:"30px"}}> I'm {' '}
                    <Typical
                        loop={Infinity}
                        wrapper='b'
                        steps={
                            [
                                'a Developer 💻',
                                2000,
                                'an Engineering Student 🎓',
                                2000,
                                'a Hooper 🏀',
                                2000
                            ]
                        }
                        />
                        <br/>
                        <a href={user.instagram} ><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                    <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
                </svg></a>
                    <a href={user.linkedIn}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                        <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path><path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path><path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path><path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
                    </svg></a>
                    <a href={user.github}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 64 64">
                        <linearGradient id="KpzH_ttTMIjq8dhx1zD2pa_52539_gr1" x1="30.999" x2="30.999" y1="16" y2="55.342" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"></stop><stop offset="1" stop-color="#e6abff"></stop></linearGradient><path fill="url(#KpzH_ttTMIjq8dhx1zD2pa_52539_gr1)" d="M25.008,56.007c-0.003-0.368-0.006-1.962-0.009-3.454l-0.003-1.55 c-6.729,0.915-8.358-3.78-8.376-3.83c-0.934-2.368-2.211-3.045-2.266-3.073l-0.124-0.072c-0.463-0.316-1.691-1.157-1.342-2.263 c0.315-0.997,1.536-1.1,2.091-1.082c3.074,0.215,4.63,2.978,4.694,3.095c1.569,2.689,3.964,2.411,5.509,1.844 c0.144-0.688,0.367-1.32,0.659-1.878C20.885,42.865,15.27,40.229,15.27,30.64c0-2.633,0.82-4.96,2.441-6.929 c-0.362-1.206-0.774-3.666,0.446-6.765l0.174-0.442l0.452-0.144c0.416-0.137,2.688-0.624,7.359,2.433 c1.928-0.494,3.969-0.749,6.074-0.759c2.115,0.01,4.158,0.265,6.09,0.759c4.667-3.058,6.934-2.565,7.351-2.433l0.451,0.145 l0.174,0.44c1.225,3.098,0.813,5.559,0.451,6.766c1.618,1.963,2.438,4.291,2.438,6.929c0,9.591-5.621,12.219-10.588,13.087 c0.563,1.065,0.868,2.402,0.868,3.878c0,1.683-0.007,7.204-0.015,8.402l-2-0.014c0.008-1.196,0.015-6.708,0.015-8.389 c0-2.442-0.943-3.522-1.35-3.874l-1.73-1.497l2.274-0.253c5.205-0.578,10.525-2.379,10.525-11.341c0-2.33-0.777-4.361-2.31-6.036 l-0.43-0.469l0.242-0.587c0.166-0.401,0.894-2.442-0.043-5.291c-0.758,0.045-2.568,0.402-5.584,2.447l-0.384,0.259l-0.445-0.123 c-1.863-0.518-3.938-0.796-6.001-0.806c-2.052,0.01-4.124,0.288-5.984,0.806l-0.445,0.123l-0.383-0.259 c-3.019-2.044-4.833-2.404-5.594-2.449c-0.935,2.851-0.206,4.892-0.04,5.293l0.242,0.587l-0.429,0.469 c-1.536,1.681-2.314,3.712-2.314,6.036c0,8.958,5.31,10.77,10.504,11.361l2.252,0.256l-1.708,1.49 c-0.372,0.325-1.03,1.112-1.254,2.727l-0.075,0.549l-0.506,0.227c-1.321,0.592-5.839,2.162-8.548-2.485 c-0.015-0.025-0.544-0.945-1.502-1.557c0.646,0.639,1.433,1.673,2.068,3.287c0.066,0.19,1.357,3.622,7.28,2.339l1.206-0.262 l0.012,3.978c0.003,1.487,0.006,3.076,0.009,3.444L25.008,56.007z"></path><linearGradient id="KpzH_ttTMIjq8dhx1zD2pb_52539_gr2" x1="32" x2="32" y1="5" y2="59.167" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#KpzH_ttTMIjq8dhx1zD2pb_52539_gr2)" d="M32,58C17.663,58,6,46.337,6,32S17.663,6,32,6s26,11.663,26,26S46.337,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"></path>
                    </svg></a>
                    <a href={user.facebook}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                        <path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"></path>
                    </svg></a>
                    <a href={user.codepen}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                        <linearGradient id="f6yIebMuSrKZ_sDrXzR1Ma_rAVxLWU5jZBb_gr1" x1="15.811" x2="31.621" y1="1.502" y2="44.939" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#889097"></stop><stop offset="1" stop-color="#4c5963"></stop></linearGradient><path fill="url(#f6yIebMuSrKZ_sDrXzR1Ma_rAVxLWU5jZBb_gr1)" d="M22.913,5.304l-17,11.005C5.344,16.677,5,17.309,5,17.988v12.024	c0,0.678,0.344,1.31,0.913,1.679l17,11.005c0.661,0.428,1.512,0.428,2.174,0l17-11.005C42.656,31.323,43,30.69,43,30.012V17.988	c0-0.678-0.344-1.31-0.913-1.679l-17-11.005C24.426,4.875,23.574,4.875,22.913,5.304z M23.422,27.19l-3.254-2.307	c-0.566-0.401-0.561-1.243,0.009-1.638l3.254-2.251c0.342-0.237,0.796-0.237,1.138,0l3.254,2.251	c0.571,0.395,0.576,1.237,0.009,1.638l-3.254,2.307C24.232,27.436,23.768,27.436,23.422,27.19z M26,16.67v-4.139	c0-0.792,0.878-1.27,1.543-0.84l8.644,5.59c0.594,0.384,0.612,1.247,0.035,1.656l-3.25,2.304c-0.344,0.244-0.804,0.246-1.15,0.005	l-5.393-3.755C26.16,17.304,26,16.997,26,16.67z M21.571,17.491l-5.393,3.755c-0.346,0.241-0.806,0.239-1.15-0.005l-3.25-2.304	c-0.577-0.409-0.559-1.271,0.035-1.656l8.644-5.59c0.665-0.43,1.543,0.047,1.543,0.84v4.139C22,16.997,21.84,17.304,21.571,17.491z M11.552,24.466l-1.766,1.229C9.454,25.926,9,25.689,9,25.285v-2.471c0-0.405,0.456-0.642,0.788-0.409l1.766,1.242	C11.837,23.846,11.836,24.267,11.552,24.466z M16.112,26.853l5.463,3.842C21.842,30.882,22,31.187,22,31.513v3.957	c0,0.792-0.878,1.27-1.543,0.84l-8.65-5.594c-0.598-0.387-0.612-1.257-0.026-1.662l3.187-2.205	C15.313,26.61,15.77,26.612,16.112,26.853z M26.425,30.695l5.463-3.842c0.343-0.241,0.8-0.243,1.144-0.004l3.187,2.205	c0.586,0.405,0.572,1.275-0.026,1.662l-8.65,5.594C26.878,36.739,26,36.261,26,35.469v-3.957C26,31.187,26.158,30.882,26.425,30.695	z M36.446,23.646l1.766-1.242C38.544,22.171,39,22.408,39,22.813v2.471c0,0.404-0.454,0.641-0.786,0.41l-1.766-1.229	C36.164,24.267,36.163,23.846,36.446,23.646z"></path>
                    </svg></a>
                    </p>
                    <br/>
                    </Col>
                    <Col lg={3} className="float-center">
                        <div className="glow vert-move">
                    <img src={'/profile.png'} alt="Notebook" className="nameimg img-fluid " />
                    </div>
                    </Col>
                </Row>
            </Container>
            <br/>
            <div id="slider">
                <figure>
                    <img src={'/ethify.png'} alt="IMG1" />
                    <img src={'/image.png'} alt="IMG2" />
                    <img src={'/mini_project_angular_hide.png'} alt="IMG3" />
                </figure>
            </div>
            <div className='text-center'><img src={'/signature.png'} className="signature" alt="signature" />
        </div>
    </main>
  )
}
