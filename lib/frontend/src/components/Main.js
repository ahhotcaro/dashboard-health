import {useEffect, useState} from 'react'

//import components
import Header from "./Header";
import Card from "./Card";

//import icons
import foodIcon from "../assets/foodIcon.jpg";
import food from "../assets/food.jpg";
import sleepIcon from "../assets/sleepIcon.jpg";
import timeIcon from "../assets/timeIcon.jpg";
import activityIcon from "../assets/activityIcon.jpg";
import tipsIcon from "../assets/tipsIcon.jpg";


export default function Main() {

  //to generate an aleatory number of hours of sleep, creation of our own API 
  const [time2Bed, setTime2Bed] = useState("")
  //to generate a random quote 
  const [randomQuote, setRandomQuote] = useState({})
  useEffect(() => {

  const fetchTime2Bed = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/time2bed")
      if (!res) return
      const data = await res.text()
      setTime2Bed(data);
    } catch (error) {
      console.error(error)
    }
  }
  const fetchRandomQuote = async () => {
      const res = await fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random");
      const data = await res.json();
      //we render the author, kind?? and the quote
      const newRandomQuote = {
      quoteAuthor: data.data[0].quoteAuthor,
      quoteGenre: data.data[0].quoteGenre,
      quoteText: data.data[0].quoteText,
      }
      setRandomQuote(newRandomQuote)
  }
  fetchTime2Bed()
  fetchRandomQuote()
  }, []);

    return (

      <div className="main">

        <div className="up">
          <Header />
        </div>
        {/* frame dans lequel sont tous les widgets */}
        <div className="widgets">


            {/* groupe des trois petits widgets */}
            <div className="group1">

              {/* widget food suggestion */}
              <Card className="mosaique"
                icone={foodIcon} 
                alt="food icon" 
                titre="Food Suggestions" 
                alternative="food icon"> 
                <p className="data">Today, we suggest : </p>
                <p className="data">the recipe for zucchini gratin ! </p>
                <div className="data">
                  <img 
                    className="food" 
                    src={food} 
                    width="100px" 
                    alt="food" 
                    className="food" /> <br />
                  <button className="button">See the recipe</button>
                </div>
              </Card>

              {/* widget sleep quality */}
              <Card className="mosaique"
                icone={sleepIcon} 
                alternative="sleep icon" 
                titre="Sleep Quality">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type 
                  specimen book. It has survived not only five centuries, but also the leap into 
                  electronic typesetting, remaining essentially unchanged. </p>
              </Card>

              {/* widget time in bed */}
              <Card className="mosaique"
                icone={timeIcon} 
                alternative="time icon" 
                titre="Time in Bed" >
                <p className="data">This night, you spent {time2Bed} hours in bed.</p>
                <p className="data">This week, you spent in average ... hours per night sleeping.</p>
              </Card>

            </div>
            
            {/* groupe de deux gros widgets, tips and activity */}
            <div className="group2">

              {/* Activity growth */}
              <Card 
                icone={activityIcon} 
                alternative="activity icon" 
                titre="Activity Growth">
                  <p className="data">Lorem Ipsum is simply dummy text of the printing and 
                  typesetting industry. Lorem Ipsum has been the industry's standard dummy text 
                  ever since the 1500s, when an unknown printer took a galley of type and scrambled
                  it to make a type specimen book. It has survived not only five centuries, but 
                  also the leap into electronic typesetting, remaining essentially unchanged. It 
                  was popularised in the 1960s with the release of Letraset sheets containing Lorem 
                  Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum.</p>
              </Card>

              {/* tips and motivation */}
            
              <Card className="mosaique"
                icone={tipsIcon} 
                alternative="tips icon" 
                titre="Tips and Motivation">
                        {/* <p className="data">Genre : {randomQuote?.quoteGenre && randomQuote.quoteGenre}</p>
                        <p className="data">{randomQuote?.quoteText && randomQuote.quoteText}</p>
                        <p className="data">Author : {randomQuote?.quoteAuthor && randomQuote.quoteAuthor}</p> */}
                <blockquote className="data">{randomQuote?.quoteText && randomQuote.quoteText} <i>{randomQuote?.quoteAuthor && randomQuote.quoteAuthor}<br />{randomQuote?.quoteGenre && randomQuote.quoteGenre}</i></blockquote>
              </Card>
        
            </div>
          
          
        </div>
       
      </div>
    );
  };
