import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SkipBackThickProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SkipBackThick: ForwardRefExoticComponent<SkipBackThickProps & RefAttributes<SVGSVGElement>>;

export default SkipBackThick;
export { SkipBackThick };
