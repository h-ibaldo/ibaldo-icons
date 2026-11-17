import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowRightFromBarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowRightFromBar: ForwardRefExoticComponent<ArrowRightFromBarProps & RefAttributes<SVGSVGElement>>;

export default ArrowRightFromBar;
export { ArrowRightFromBar };
