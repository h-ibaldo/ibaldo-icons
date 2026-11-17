import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchSwipeDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchSwipeDown: ForwardRefExoticComponent<TouchSwipeDownProps & RefAttributes<SVGSVGElement>>;

export default TouchSwipeDown;
export { TouchSwipeDown };
