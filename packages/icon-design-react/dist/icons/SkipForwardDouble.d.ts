import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SkipForwardDoubleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SkipForwardDouble: ForwardRefExoticComponent<SkipForwardDoubleProps & RefAttributes<SVGSVGElement>>;

export default SkipForwardDouble;
export { SkipForwardDouble };
