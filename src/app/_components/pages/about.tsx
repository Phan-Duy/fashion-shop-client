import React from "react";
import Image from "next/image";
import useScrollToTop from "../../hooks/scroll";

function About() {
	useScrollToTop(); 
	return (
		<div className='w-100 h-100 d-flex align-items-center justify-content-center flex-column m-5'>
			<div className='w-50 h-50 p-3 rounded-5 shadow-4-strong bg-light'>
				<h3 className='text-center text-black'>Giới thiệu về ZoiBook</h3>
				<hr />
				<div className='row'>
					<div className='col-lg-8'>
						<p>
							<strong>Tên website: </strong>DSHOP
						</p>
						<p>
							<strong>Địa chỉ: </strong>453 Kha Van Can, Hiep Binh Chanh ward, Ho Chi Minh City, Viet Nam
						</p>
						<p>
							<strong>Số điện thoại: </strong>0384845301
						</p>
						<p>
							<strong>Email: </strong>trduy.1002@gmail.com
						</p>
					</div>
					<div className='col-lg-4'>
						<div
							className='d-flex align-items-center justify-content-center rounded-5'
							style={{ border: "1px solid #ccc" }}
						>
							<Image src="/assets/logo.png" alt="Logo" width={50} height={50} />
                            <div className="text-2xl tracking-wide">DSHOP</div>
						</div>
					</div>
				</div>
			</div>
			<div className='w-50 h-50 p-3 rounded-5 shadow-4-strong bg-light mt-3'>
				<h3 className='text-center text-black'>Google maps</h3>
				<hr />
				<div className='d-flex align-items-center justify-content-center'>
					<iframe
						title='Map'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d979.7718648167253!2d106.71648955933027!3d10.804613354430936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175293dceb22197%3A0x755bb0f39a48d4a6!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBHaWFvIFRow7RuZyBW4bqtbiBU4bqjaSBUaMOgbmggUGjhu5EgSOG7kyBDaMOtIE1pbmggLSBDxqEgc-G7nyAx!5e0!3m2!1svi!2s!4v1699964965789!5m2!1svi!2s'
						width='600'
						height='450'
						style={{ border: 0 }}
						allowFullScreen={true}
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
					></iframe>
				</div>
			</div>
		</div>
	);
}

export default About;

