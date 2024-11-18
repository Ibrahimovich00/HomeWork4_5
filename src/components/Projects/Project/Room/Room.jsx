import './room.css';
import image1 from '../../../../image/imgProject/Image1.png';
import image2 from '../../../../image/imgProject/Image2.png';
import image3 from '../../../../image/imgProject/Image3.png';
import image4 from '../../../../image/imgProject/Image4.png';
import image5 from '../../../../image/imgProject/Image5.png';
import image6 from '../../../../image/imgProject/Image6.png';
import image7 from '../../../../image/imgProject/Image7.png';
import image8 from '../../../../image/imgProject/Image8.png';

export const Room = () => {
    return (
			<div className='room'>
				<div className='wrapper'>
					<div className='inner'>
						<button className='btn'>Bathroom</button>
						<button className='btn'>Bed Room</button>
						<button className='btn'>Kitchen</button>
						<button className='btn'>Living Area</button>
					</div>
				</div>
				<div className='goods'>
					<div className='goods_container'>
						<img className='imageBig' src={image1} alt='' />
						<div className='goods_title'>
							<div className='goods_aside'>
								<h2>Minimal Bedroom</h2>
								<p>Decor / Architecture</p>
							</div>
							<button className='goods_btn'></button>
						</div>
					</div>
					<div className='goods_container'>
						<img className='imageSmall' src={image2} alt='' />
						<div className='goods_title'>
							<div className='goods_aside'>
								<h2>Minimal Bedroom</h2>
								<p>Decor / Architecture</p>
							</div>
							<button className='goods_btn'></button>
						</div>
					</div>
					<div className='goods_container'>
						<img className='imageSmall' src={image3} alt='' />
						<div className='goods_title'>
							<div className='goods_aside'>
								<h2>Classic Minimal Bedroom</h2>
								<p>Decor / Architecture</p>
							</div>
							<button className='goods_btn'></button>
						</div>
					</div>
					<div className='goodsUp_container'>
						<img className='imageBig' src={image4} alt='' />
						<div className='goods_title'>
							<div className='goods_aside'>
								<h2>Modern Bedroom</h2>
								<p>Decor / Architecture</p>
							</div>
							<button className='goods_btn'></button>
						</div>
					</div>
					<div className='goods_container'>
						<img className='imageBig' src={image5} alt='' />
						<div className='goods_title'>
							<div className='goods_aside'>
								<h2>Minimal Bedroom table</h2>
								<p>Decor / Architecture</p>
							</div>
							<button className='goods_btn'></button>
						</div>
					</div>
					<div className='goods_container'>
						<img className='imageSmall' src={image6} alt='' />
						<div className='goods_title'>
							<div className='goods_aside'>
								<h2>System Table</h2>
								<p>Decor / Architecture</p>
							</div>
							<button className='goods_btn'></button>
						</div>
					</div>
					<div className='goods_container'>
						<img className='imageSmall' src={image7} alt='' />
						<div className='goods_title'>
							<div className='goods_aside'>
								<h2>Minimal Bedroom</h2>
								<p>Decor / Architecture</p>
							</div>
							<button className='goods_btn'></button>
						</div>
					</div>
					<div className='goodsUp_container'>
						<img className='imageSmall' src={image8} alt='' />
						<div className='goods_title'>
							<div className='goods_aside'>
								<h2>Minimal Bedroom</h2>
								<p>Decor / Architecture</p>
							</div>
							<button className='goods_btn'></button>
						</div>
					</div>
				</div>
				<div className='room_footer'>
					<div className='room_inner'>
						<button className='room_btn'>01</button>
						<button className='room_btn'>02</button>
						<button className='room_btn'>03</button>
						<button className='room_btn'></button>
					</div>
				</div>
			</div>
		)
}
