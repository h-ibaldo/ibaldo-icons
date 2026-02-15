import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchScreenSingleTouchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchScreenSingleTouch: ForwardRefExoticComponent<TouchScreenSingleTouchProps & RefAttributes<SVGSVGElement>>;

export default TouchScreenSingleTouch;
export { TouchScreenSingleTouch };
