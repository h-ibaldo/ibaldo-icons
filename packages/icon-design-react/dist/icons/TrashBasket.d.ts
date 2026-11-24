import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrashBasketProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrashBasket: ForwardRefExoticComponent<TrashBasketProps & RefAttributes<SVGSVGElement>>;

export default TrashBasket;
export { TrashBasket };
