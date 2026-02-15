import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchScreenDoubleTouchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchScreenDoubleTouch: ForwardRefExoticComponent<TouchScreenDoubleTouchProps & RefAttributes<SVGSVGElement>>;

export default TouchScreenDoubleTouch;
export { TouchScreenDoubleTouch };
