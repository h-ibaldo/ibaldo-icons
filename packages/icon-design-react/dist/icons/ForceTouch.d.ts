import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ForceTouchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ForceTouch: ForwardRefExoticComponent<ForceTouchProps & RefAttributes<SVGSVGElement>>;

export default ForceTouch;
export { ForceTouch };
