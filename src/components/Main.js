import rewards from '../assets/rewards.webp';
import pink from '../assets/pink-drink.jpg';
import green from '../assets/green-drink.jpg';
const Main = () => {
  return (
    <div className='main'>
      <div className='card reward-card'>
        <div className='img-container'>
          <img src={rewards} />
        </div>
        <div className='details'>
          <h2 className='card-title'>We’re giving away 4 cars in 4 weeks*</h2>
          <p className='card-detail'>
            Starbucks® Summer Game is back—don’t miss the chance to win gift
            cards, Stars and a new Volvo XC40 Recharge.
          </p>
          <a href='#' className='btn'>
            Let's play
          </a>
        </div>
        <div className='card pink-card'>
          <div className='img-container'>
            <img src={pink} />
          </div>
          <div className='details'>
            <h2 className='card-title'>Make a splash</h2>
            <p className='card-detail'>
              Dive into the vibrant flavors of the Mango Dragonfruit and
              Strawberry Açaí Starbucks Refreshers® beverages, both with bright
              lemonade.
            </p>
            <a href='#' className='btn'>
              Order now
            </a>
          </div>
        </div>
        <div className='card green-card'>
          <div className='img-container'>
            <img src={green} />
          </div>
          <div className='details'>
            <h2 className='card-title'>Chase happy things</h2>
            <p className='card-detail'>
              Our Caramel Ribbon Crunch and Mocha Cookie Crumble Frappuccino®
              blended beverages are made for summer fun.
            </p>
            <a href='#' className='btn'>
              Order now
            </a>
          </div>
        </div>
        <div className='alert'>
          <p>
            *NO PURCHASE NECESSARY. Participating stores only. Starbucks
            Partners (employees) are not eligible to win prizes. Ends 6/17/22.
            To play and for Official Rules, visit
            <a href='https://www.starbuckssummergame.com/#/landing'>
              starbuckssummergame.com/.
            </a>
          </p>
          <p>
            Entrants can receive a maximum of 2 plays per day, plus, bonus
            opportunities to earn additional plays.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
