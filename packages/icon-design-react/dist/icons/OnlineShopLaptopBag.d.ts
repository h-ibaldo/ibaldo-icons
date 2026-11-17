import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface OnlineShopLaptopBagProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const OnlineShopLaptopBag: ForwardRefExoticComponent<OnlineShopLaptopBagProps & RefAttributes<SVGSVGElement>>;

export default OnlineShopLaptopBag;
export { OnlineShopLaptopBag };
