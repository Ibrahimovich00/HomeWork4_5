import './projectDetails.css';
import BannerDetails from '../../../image/imgProject/BannerDetails.jpg'

export const ProjectDetails = () => {
    return (
			<div className='ProjectDetails'>
				<div className='ProjectDetails_banner'>
					<img src={BannerDetails} alt='' />
				</div>
			</div>
		)
}
