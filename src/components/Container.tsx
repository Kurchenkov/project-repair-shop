import Logo from "./Logo";
import PromoText from "./PromoText";
import Services from "./Services";
import Sticker from "./Sticker";
import '../styles/Container.css';

const Container = () => {
  const repairItems = ['ноутбуков', 'телефонов', 'смартфонов', 'планшетов', 'мониторов', 'и т.д.'];
  const serviceItems = [
   'распечатываем материалы в формате "А4" с любых носителей;',
   'выход в интернет;',
   'восстановление информации с любых носителей;',
   'ксерокопирование и сканирование;',
   'чистка от пыли и ненужной информации вашей техники;',
   'лечение от вирусных и шпионских программ;',
   'установка антивирусного обеспечения;',
   'комплектация системных блоков комплектующими по вашему заказу;',
   'сборка игровых и офисных системных блоков;',
   'перенос информации на разные носители (HDD и SSD);',
   'профилактические работы;'
  ];

  return (
    <div className="Container">
        <Logo />
        <PromoText repairItems = {repairItems}/>
        <Sticker />
        <Services serviceItems = {serviceItems}/>
    </div>
  )
}

export default Container