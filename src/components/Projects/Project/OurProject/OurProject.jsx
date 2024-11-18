import './ourProject.css';
import banner from '../../../../image/imgProject/Banner.jpg';

export const OurProject = () => {
    return (
			<div className='ourProject'>
				<div className='banner'>                    
					<img className='img' src={banner} alt='' />
                    <div className='container'>
					    <div className='title'>
						    <h1 className='caption'>Our Project</h1>
						    <p className='subtitle'>Home / Project</p>
					    </div>
                    </div>
				</div>
			</div>
		)
}
