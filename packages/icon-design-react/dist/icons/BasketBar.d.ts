import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BasketBarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BasketBar: ForwardRefExoticComponent<BasketBarProps & RefAttributes<SVGSVGElement>>;

export default BasketBar;
export { BasketBar };
