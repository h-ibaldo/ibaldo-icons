import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MenuThreeDots3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MenuThreeDots3: ForwardRefExoticComponent<MenuThreeDots3Props & RefAttributes<SVGSVGElement>>;

export default MenuThreeDots3;
export { MenuThreeDots3 };
