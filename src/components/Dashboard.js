import '../styles/Dashboard.css'
import logo from '../assets/logo.png'
import glass from '../assets/glass.jpg'
import bell from '../assets/bell.jpg'
import foodIcon from '../assets/foodIcon.jpg'
import food from '../assets/food.jpg'
import sleepIcon from '../assets/sleepIcon.jpg'
import timeIcon from '../assets/timeIcon.jpg'
import activityIcon from '../assets/activityIcon.jpg'
import tipsIcon from '../assets/tipsIcon.jpg'
import menuIcon1 from '../assets/menuIcon1.jpg'
import menuIcon2 from '../assets/menuIcon2.jpg'
import menuIcon3 from '../assets/menuIcon3.jpg'
import menuIcon4 from '../assets/menuIcon4.jpg'
import menuIcon5 from '../assets/menuIcon5.jpg'
import menuIcon6 from '../assets/menuIcon6.jpg'
import dietIcon from '../assets/dietIcon.jpg'
import manBody from '../assets/manBody.jpg'
import BMIscale from '../assets/BMIscale.jpg'



function Dashboard() {
	const title = 'John’s Dashboard Overview'
	const currentDay = new Date().getDate()
	const currentMonth = new Date().getMonth()
	const currentYear = new Date().getFullYear()
	const date = new Date(Date.UTC(currentYear, currentMonth, currentDay));
	const currentDate = new Intl.DateTimeFormat('en-US', { year: "numeric", month: 'long', day: "numeric" }).format(date);


	return (
		<div className='dashboard'>

			<div className='centerFrame'>

				<h1 className='title'>{title}</h1>
        		<p className='date'>{currentDate}</p>

				<div className='headerButton'>
					<div className='research'>
						<img src={glass} alt='glass' width='24px' height='24px'/>
					</div>
					<div className='notifications'>
						<img src={bell} alt='bell' width='24px' height='24px'/>
					</div>
				</div>

				<div className='foodSuggestions'>
					<img src={foodIcon} alt='food icon' className='foodIcon'/>
					<h3 className='foodTitle'>Food Sugestions</h3>
					<img src={food} alt='food' className='food'/>
				</div>

				<div className='sleepQuality'>
					<img src={sleepIcon} alt='sleep icon' className='sleepIcon'/>
					<h3 className='sleepTitle'>Sleep Quality</h3>
					<p className='data'>76%</p>
					<p className='sleepAverage'>Average</p>
					<div className='sleepFromLastWeek'>
						<p className='subtitle'>From last week</p>
					</div>
				</div>
		
				<div className='timeToBed'>
					<img src={timeIcon} alt='time icon' className='timeIcon'/>
					<h3 className='timeTitle'>Time to Bed</h3>
					<p className='data'>11pm</p>
					<p className='timeAverage'>Average</p>
					<div className='timeFromLastWeek'>
						<p className='subtitle'>From last week</p>
					</div>
				</div>

				<div className='activityGrowth'>
					<img src={activityIcon} alt='activity icon' className='activityIcon'/>
					<h3 className='activityTitle'>Activity Growth</h3>
				</div>

				<div className='tipsAndMotivation'>
					<img src={tipsIcon} alt='tips icon' className='tipsIcon'/>
					<h3 className='tipsTitle'>Tips and Motivation</h3>
					<div className='theme'>
						<p className='themeName'>Health</p>
					</div>
				</div>
			</div>
			
			<div className='nav'>
				<img src={logo} alt='logo' className='logo' />
				<img src={menuIcon1} alt='dashboard icon' className='menuIcon1' />
				<img src={menuIcon2} alt='calendar icon' className='menuIcon2' />
				<img src={menuIcon3} alt='chat icon' className='menuIcon3' />
				<img src={menuIcon4} alt='stats icon' className='menuIcon4' />
				<img src={menuIcon5} alt='settings icon' className='menuIcon5' />
				<img src={menuIcon6} alt='log out icon' className='menuIcon6' />
			</div>

			<div className='rightFrame'>
				<img src={dietIcon} alt='diet icon' className='dietIcon' />
				<h2 className='dietTitle'>Diet and Calories</h2>
				<div className='textLine1'></div><p className='unity1'>grams</p>
				<div className='textLine2'></div><p className='unity2'>grams</p>
				<div className='textLine3'></div><p className='unity3'>grams</p>
				<div className='textLine4'></div><p className='unity4'>grams</p>
				<p className='meal'>Your meal represents</p>
				<p className='kcal'>Kilocalories</p>
				<div className='sectionLine'></div>
				<h3 className='BMICalculator'>BMI Calculator</h3>
				<p className='dateCheck'>Last checked 2 days ago</p>
				<div className='height'>
					<p className='heightTitle'>Height</p>
				</div>
				<div className='weight'>
					<p className='weightTitle'>Weight</p>
				</div>
				<div className='BMI'>
					<p className='BMITitle'>Body Mass Index (BMI)</p>
					<div className='healthState'></div>
					<img src={BMIscale} alt='BMI scale' className='BMIscale' />
				</div>
				<img src={manBody} alt='man body' className='manBody' />
			</div>
			
		</div>
	)
}

export default Dashboard