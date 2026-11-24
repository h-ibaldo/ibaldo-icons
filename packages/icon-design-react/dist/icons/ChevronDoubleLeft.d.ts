import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChevronDoubleLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChevronDoubleLeft: ForwardRefExoticComponent<ChevronDoubleLeftProps & RefAttributes<SVGSVGElement>>;

export default ChevronDoubleLeft;
export { ChevronDoubleLeft };
