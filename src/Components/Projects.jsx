import "../Styles/Components/Projects.css";
export function Projects() {
	return (
		<div className="projects-container" id="projects">
			<p className="section-heading">
				MY <span>Projects</span>
			</p>
			<div className="projects">
				<div className="project">
					<img src="project1.png" alt="project" className="project-icon" />
					<h2 className="project-heading">Oxygen MIS</h2>
					<a
						href="https://oxygen.techlands.online/"
						target="_blank"
						className="btn-active">
						Demo <i class="fa-regular fa-eye download-icon"></i>
					</a>
				</div>
				<div className="project">
					<img src="project2.png" alt="project" className="project-icon" />
					<h2 className="project-heading">gym power MIS</h2>
					<a
						href="https://gym.techlands.online/"
						target="_blank"
						className="btn-active">
						Demo <i class="fa-regular fa-eye download-icon"></i>
					</a>
				</div>
				<div className="project">
					<img src="project3.png" alt="project" className="project-icon" />
					<h2 className="project-heading">Exchange Bills MIS</h2>
					<a
						href="https://billing.techlands.online/"
						target="_blank"
						className="btn-active">
						Demo <i class="fa-regular fa-eye download-icon"></i>
					</a>
				</div>
				<div className="project">
					<img src="project4.jpg" alt="project" className="project-icon" />
					<h2 className="project-heading">Parvaz MIS</h2>
					<a
						href="https://billing.techlands.online/"
						target="_blank"
						className="btn-active">
						Demo <i class="fa-regular fa-eye download-icon"></i>
					</a>
				</div>
				<div className="project">
					<img src="project5.jpg" alt="project" className="project-icon" />
					<h2 className="project-heading">Baran MIS</h2>
					<a
						href="https://billing.techlands.online/"
						target="_blank"
						className="btn-active">
						Demo <i class="fa-regular fa-eye download-icon"></i>
					</a>
				</div>
			</div>
		</div>
	);
}
