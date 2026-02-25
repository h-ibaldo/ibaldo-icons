import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchScreenSingleTouch2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchScreenSingleTouch2: ForwardRefExoticComponent<TouchScreenSingleTouch2Props & RefAttributes<SVGSVGElement>>;

export default TouchScreenSingleTouch2;
export { TouchScreenSingleTouch2 };
