import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface OnlineShopMobileBagProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const OnlineShopMobileBag: ForwardRefExoticComponent<OnlineShopMobileBagProps & RefAttributes<SVGSVGElement>>;

export default OnlineShopMobileBag;
export { OnlineShopMobileBag };
