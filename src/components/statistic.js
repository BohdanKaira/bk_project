import { StatisticContent } from "../data/SectionText";
function Statistic() {

    return(
        <section data-aos="zoom-in-up" data-aos-duration="600" className="page__statistic statistic">
				<div className="statistic__container">
					<div className="statistic__item">
						<h4 className="statistic__subtitle _subtitle">{StatisticContent.clientSubtitle}</h4>
						<h3 className="statistic__title _title">{StatisticContent.clientTitle}</h3>
					</div>
					<div className="statistic__item">
						<h4 className="statistic__subtitle _subtitle">{StatisticContent.projectSubtitle}</h4>
						<h3 className="statistic__title _title">{StatisticContent.porjectTitle}</h3>
					</div>
					<div className="statistic__item">
						<h4 className="statistic__subtitle _subtitle">{StatisticContent.expSubtitle}</h4>
						<h3 className="statistic__title _title">{StatisticContent.expTitle}</h3>
					</div>
				</div>
			</section>
    )
}
export default Statistic;