import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SkipForwardProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SkipForward: ForwardRefExoticComponent<SkipForwardProps & RefAttributes<SVGSVGElement>>;

export default SkipForward;
export { SkipForward };
