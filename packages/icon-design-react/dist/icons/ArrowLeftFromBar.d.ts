import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowLeftFromBarProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowLeftFromBar: ForwardRefExoticComponent<ArrowLeftFromBarProps & RefAttributes<SVGSVGElement>>;

export default ArrowLeftFromBar;
export { ArrowLeftFromBar };
