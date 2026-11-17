import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchScreenSwipeUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchScreenSwipeUp: ForwardRefExoticComponent<TouchScreenSwipeUpProps & RefAttributes<SVGSVGElement>>;

export default TouchScreenSwipeUp;
export { TouchScreenSwipeUp };
