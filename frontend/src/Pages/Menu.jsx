import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb';
import MenuDisplay from '../Components/MenuDisplay/MenuDisplay';
import Review from '../Components/Review/Review';
import Relatedmenu from '../Components/RelatedMenu/Relatedmenu';

const Menu = () => {
  const {all_product}=useContext(ShopContext);
  const {menuId}= useParams();
  const menu=all_product.find((e)=> e.id === Number(menuId));
  return (
    <div>
<Breadcrumb menu={menu} />
<MenuDisplay menu={menu} />
<Review/>
<Relatedmenu/>
    </div>
  )
}

export default Menu