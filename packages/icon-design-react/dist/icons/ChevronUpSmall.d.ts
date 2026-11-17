import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronUpSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronUpSmall: ForwardRefExoticComponent<ChevronUpSmallProps & RefAttributes<SVGSVGElement>>;

export default ChevronUpSmall;
export { ChevronUpSmall };
