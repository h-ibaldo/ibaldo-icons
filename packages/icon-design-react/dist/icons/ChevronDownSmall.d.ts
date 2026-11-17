import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronDownSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronDownSmall: ForwardRefExoticComponent<ChevronDownSmallProps & RefAttributes<SVGSVGElement>>;

export default ChevronDownSmall;
export { ChevronDownSmall };
