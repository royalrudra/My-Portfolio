import React, { Component } from 'react';

let skillDescs = [
	{
		id: 0,
		title: "UI/UX Designer",
    desc: "I'm a freelance UI/UX design consultant with 3+ years of experience in digital design. I love designing simple and consistent web & mobile interfaces.",
    icon: '<svg width="60px" height="60px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg" id="skill-ui-icon"><defs></defs><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="light-bulb-copy" fillRule="nonzero" fill="#8F98E4"><path d="M30,9.95510204 C20.9142857,9.95510204 14.3510204,16.7265306 13.3102041,24 C12.6612245,28.8489796 14.2285714,33.5755102 17.4857143,37.1510204 C20.3510204,40.2122449 21.9183673,44.3020408 21.9183673,48.5142857 L21.9061224,55.1510204 C21.9061224,57.8326531 24.122449,60 26.8653061,60 L33.2571429,60 C36,60 38.2163265,57.8326531 38.2163265,55.1510204 L38.2285714,48.5142857 C38.2285714,44.1795918 39.6612245,40.2122449 42.4040816,37.4081633 C45.4040816,34.3469388 46.9714286,30.3918367 46.9714286,26.3020408 C46.9591837,17.2285714 39.2571429,9.95510204 30,9.95510204 L30,9.95510204 Z M35.7306122,55.1510204 C35.7306122,56.4244898 34.6897959,57.4530612 33.3795918,57.4530612 L26.9877551,57.4530612 C25.677551,57.4530612 24.6367347,56.4367347 24.6367347,55.1510204 L24.6367347,52.2122449 L35.7183673,52.2122449 L35.7183673,55.1510204 L35.7306122,55.1510204 Z M40.5795918,35.6204082 C37.322449,38.9387755 35.6204082,43.5306122 35.6204082,48.5142857 L35.6204082,49.6653061 L24.5387755,49.6653061 L24.5387755,48.5142857 C24.5387755,43.7877551 22.5795918,39.0734694 19.322449,35.4979592 C16.4571429,32.4367347 15.2816327,28.4816327 15.7959184,24.3918367 C16.7142857,18.2693878 22.4081633,12.5142857 30.0122449,12.5142857 C37.9714286,12.5142857 44.3632653,18.7714286 44.3632653,26.3020408 C44.3632653,29.7428571 43.0530612,33.0612245 40.5795918,35.6204082 Z" id="Shape"></path><rect className="bulb-ray" id="bulb-ray1" x="0" y="27.5755102" width="6.39183673" height="2.55918367" fill="#fff"></rect><polygon className="bulb-ray" id="bulb-ray2" points="9.68571429 7.49387755 7.84897959 9.31836735 12.3183673 13.6163265 14.1428571 11.7918367" fill="#fff"></polygon><rect className="bulb-ray" id="bulb-ray3" x="28.6897959" y="0" width="2.60816327" height="6.12244898" fill="#fff"></rect><polygon className="bulb-ray" id="bulb-ray4" points="45.8081633 11.8040816 47.6326531 13.6285714 52.1020408 9.33061224 50.2653061 7.50612245" fill="#fff"></polygon><rect className="bulb-ray" id="bulb-ray5" x="53.6081633" y="27.5755102" width="6.39183673" height="2.55918367" fill="#fff"></rect></g></g></svg>'
  },
  {
    id: 1,
    title: 'Front-End Developer',
    desc: "I like coding my own designs. I implement using HTML, CSS and Javascript. Recently, I'm using React.js library for all frontend development projects.",
    icon: '<svg width="100px" height="42px" viewBox="0 0 76 50" version="1.1" xmlns="http://www.w3.org/2000/svg" id="skill-code-icon"> <defs></defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <path d="M21.963,8.904 C21.448,8.256 20.507,8.146 19.856,8.662 L0.643,23.901 C0.285,24.185 0.076,24.618 0.076,25.076 C0.076,25.534 0.285,25.967 0.643,26.251 L19.855,41.49 C20.131,41.709 20.46,41.815 20.787,41.815 C21.229,41.815 21.667,41.621 21.963,41.248 C22.479,40.599 22.369,39.655 21.721,39.141 L3.989,25.076 L21.72,11.012 C22.369,10.497 22.479,9.554 21.963,8.904 Z" id="code-left" fill="#4BC6B9"></path> <path d="M75.357,23.901 L56.145,8.662 C55.494,8.146 54.551,8.256 54.038,8.904 C53.522,9.553 53.632,10.497 54.28,11.011 L72.011,25.075 L54.279,39.141 C53.631,39.656 53.521,40.599 54.037,41.248 C54.333,41.621 54.77,41.815 55.213,41.815 C55.539,41.815 55.868,41.709 56.145,41.49 L75.358,26.251 C75.716,25.967 75.925,25.534 75.925,25.076 C75.925,24.618 75.716,24.186 75.357,23.901 Z" id="code-right" fill="#4BC6B9"></path> <path d="M47.013,0.308 C46.239,0.022 45.375,0.425 45.091,1.204 L28.091,47.923 C27.808,48.701 28.209,49.562 28.987,49.845 C29.156,49.908 29.329,49.936 29.5,49.936 C30.112,49.936 30.688,49.558 30.909,48.949 L47.909,2.23 C48.192,1.451 47.791,0.591 47.013,0.308 Z" id="Path" fill="#4BC6B9"></path> </g> </svg>'
  }

]



class Skills extends Component {
	render() {
		return (
			<div id="skills">
				<div className="container">
					<div className="row">
          {
            skillDescs.map((skill) => {
              return <Skill key={skill.id} title={skill.title} desc={skill.desc} icon={skill.icon}/>
            })
          }
					</div>
				</div>
			</div>
		);
	}
}


const Skill = (props) => {
	return (
		<div className="col-md-6">
			<div className="skill">
        <div className="skill-icon" dangerouslySetInnerHTML={{ __html: props.icon }}></div>
				<h3>{props.title}</h3>
				<p>{props.desc}</p>
			</div>
		</div>
	)
}

export default Skills;
