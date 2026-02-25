import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DTouch2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DTouch2: ForwardRefExoticComponent<DTouch2Props & RefAttributes<SVGSVGElement>>;

export default DTouch2;
export { DTouch2 };
