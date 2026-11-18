import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownDoubleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownDouble: ForwardRefExoticComponent<ArrowDownDoubleProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownDouble;
export { ArrowDownDouble };
