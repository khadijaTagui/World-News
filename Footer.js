import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="Footer ">
                <div className="container">
                    <div className="row ft-0">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3><span>World </span>News</h3>
                            <p>"World News Digest: Exploring global events, culture, and stories that shape our world. Uncovering diverse perspectives and insights from around the globe."

</p>
                            <div className="footer-icons">
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h4>Quick News</h4>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">Technology</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Business</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Health</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Science</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Sports</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Entertainment</a>
                                </li>
                               
                              
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Contact Info</h5>
                            <p><i class="fa-solid fa-phone-volume"></i> +212 604176028</p>
                            <p><i class="fa-solid fa-envelope"></i> world-news@gmail.com</p>
                            <p><i class="fa-solid fa-paper-plane"></i> Casablanca, Maroc.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p>Design By The Girls</p>
            </div>
        </>
    )
}

export default Footer
