import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BasketGridProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BasketGrid: ForwardRefExoticComponent<BasketGridProps & RefAttributes<SVGSVGElement>>;

export default BasketGrid;
export { BasketGrid };
