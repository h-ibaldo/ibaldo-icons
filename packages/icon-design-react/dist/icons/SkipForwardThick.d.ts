import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SkipForwardThickProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SkipForwardThick: ForwardRefExoticComponent<SkipForwardThickProps & RefAttributes<SVGSVGElement>>;

export default SkipForwardThick;
export { SkipForwardThick };
