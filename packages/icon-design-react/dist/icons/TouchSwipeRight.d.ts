import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchSwipeRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchSwipeRight: ForwardRefExoticComponent<TouchSwipeRightProps & RefAttributes<SVGSVGElement>>;

export default TouchSwipeRight;
export { TouchSwipeRight };
