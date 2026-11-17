import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface OnlineShopLaptopCartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const OnlineShopLaptopCart: ForwardRefExoticComponent<OnlineShopLaptopCartProps & RefAttributes<SVGSVGElement>>;

export default OnlineShopLaptopCart;
export { OnlineShopLaptopCart };
