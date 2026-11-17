import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface OnlineShopMobileCartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const OnlineShopMobileCart: ForwardRefExoticComponent<OnlineShopMobileCartProps & RefAttributes<SVGSVGElement>>;

export default OnlineShopMobileCart;
export { OnlineShopMobileCart };
