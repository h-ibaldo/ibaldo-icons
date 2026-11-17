import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandSwipeUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandSwipeUp: ForwardRefExoticComponent<HandSwipeUpProps & RefAttributes<SVGSVGElement>>;

export default HandSwipeUp;
export { HandSwipeUp };
