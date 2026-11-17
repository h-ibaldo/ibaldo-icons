import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SkipBackDoubleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SkipBackDouble: ForwardRefExoticComponent<SkipBackDoubleProps & RefAttributes<SVGSVGElement>>;

export default SkipBackDouble;
export { SkipBackDouble };
