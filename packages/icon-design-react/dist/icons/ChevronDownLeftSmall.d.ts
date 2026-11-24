import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronDownLeftSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronDownLeftSmall: ForwardRefExoticComponent<ChevronDownLeftSmallProps & RefAttributes<SVGSVGElement>>;

export default ChevronDownLeftSmall;
export { ChevronDownLeftSmall };
