import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchSwipeUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchSwipeUp: ForwardRefExoticComponent<TouchSwipeUpProps & RefAttributes<SVGSVGElement>>;

export default TouchSwipeUp;
export { TouchSwipeUp };
