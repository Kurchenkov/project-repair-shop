import '../styles/PromoText.css';

interface Props {
  repairItems: string[]
}

const PromoText = ({ repairItems }: Props) => {
  return (
    <div className = 'PromoText'>
      <h1>ремонт</h1>
      <h3>компьютеров</h3>
      <ul className='repairItems'>
        {repairItems.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  )
}

export default PromoText