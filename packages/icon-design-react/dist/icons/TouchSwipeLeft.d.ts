import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchSwipeLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchSwipeLeft: ForwardRefExoticComponent<TouchSwipeLeftProps & RefAttributes<SVGSVGElement>>;

export default TouchSwipeLeft;
export { TouchSwipeLeft };
