import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SkipForwardDoubleThickProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SkipForwardDoubleThick: ForwardRefExoticComponent<SkipForwardDoubleThickProps & RefAttributes<SVGSVGElement>>;

export default SkipForwardDoubleThick;
export { SkipForwardDoubleThick };
