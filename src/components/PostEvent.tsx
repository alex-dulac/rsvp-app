import React, { Component } from 'react';
import axios from "axios";

export class PostEvent extends Component {
	public names: string = process.env.REACT_APP_NAMES as string;
	public link: string = process.env.REACT_APP_GOOGLE_DRIVE_LINK as string;
	public driveImageBaseUrl = 'https://lh3.googleusercontent.com/d/';
	public state = {
		data : []
	};

	async componentDidMount() {
		// get images from Google Drive
		try {
			const response = await axios.get(process.env.REACT_APP_BACKEND_BASE_URL + 'getFilesByFolder');
			const images = response.data.images;
			images.sort(() => Math.random() - 0.5);
			this.setState({ data: images });
		} catch (error) {
			console.error(error);
		}
	}

	render() {
		return (
			<>
				<div className={"fade-in flex-center text text-align-center border-rounded border-solid p-50 mb-100"}>
					<div className={"flex-center"}>
						<p> Our Dear Friends & Family,<br/><br/>

							...............
						</p>
						<p className={"italic"}> {this.names} </p>
					</div>
				</div>

				<div className={"event-pictures"}>
					{this.state.data.map((image) => {
						return <div key={image} className={"scroll-in flex-center mb-30"}>
							<div className="gallery-item img-lg">
								<img src={this.driveImageBaseUrl + image} alt={""}/>
							</div>
						</div>
					})}
				</div>
			</>
		);
	}
}
