import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronLeftSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronLeftSmall: ForwardRefExoticComponent<ChevronLeftSmallProps & RefAttributes<SVGSVGElement>>;

export default ChevronLeftSmall;
export { ChevronLeftSmall };
