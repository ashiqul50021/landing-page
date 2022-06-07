import React from 'react';
import './Banner.css';
import bannerimg from '../../../images/banner.png';

const Banner = () => {
    return (
        <>
            <div className="">
                <nav className="navbar banner-nav-main navbar-expand-lg navbar-light " style={{ paddingBottom: '0px' }}>
                    <div className="container-fluid banner-nav">

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="banner-ul navbar-nav m-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link text-center" aria-current="page" href="#"><small style={{ fontSize: '10px', fontWeight: 'bolder' }}> 目標・期間を決める</small><br /><span className='nav-link-color'>留学への当</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-center" href="#"><small style={{ fontSize: '10px', fontWeight: 'bolder' }}>行きたい 住みたい国を選ぶ</small><br /><span className='nav-link-color'>留学する国</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-center" href="#"><small style={{ fontSize: '10px', fontWeight: 'bolder' }}>自分に合う学校を見つける </small><br /><span className='nav-link-color'>語学学校検索</span><br /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-center" href="#"><small style={{ fontSize: '10px', fontWeight: 'bolder' }}>留学･ワーホリを考え始めたら</small> <br /><span className='nav-link-color'><span style={{ color: 'red' }}>無料</span> 説明会・セミナー</span><br /></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-center" href="#"><small style={{ fontSize: '10px', fontWeight: 'bolder' }}>成功する留学」が伝頼され</small><br /><span className='nav-link-color'>選ばれる理由</span><br /></a>
                                </li>


                            </ul>

                        </div>
                    </div>
                </nav>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12" style={{ height: '70%' }}>
                            <img src={bannerimg} alt="" style={{ width: '95%', height: '70%', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;