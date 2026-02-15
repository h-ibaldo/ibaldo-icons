import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NavigationBarMenuArrowCursorProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NavigationBarMenuArrowCursor: ForwardRefExoticComponent<NavigationBarMenuArrowCursorProps & RefAttributes<SVGSVGElement>>;

export default NavigationBarMenuArrowCursor;
export { NavigationBarMenuArrowCursor };
