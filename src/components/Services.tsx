import '../styles/Services.css';

interface Props {
    serviceItems: string[];
}

const Services = ({serviceItems = []}: Props) => {

  return (
    <div className="Services">
        <h3>оказываем услуги:</h3>

        <ul className="servicesItems">
            {serviceItems.map((item, index) => <li key={index} className={'servicesItems-' + index.toString()}>{item}</li>)}
        </ul>

    </div>
  )
}

export default Services