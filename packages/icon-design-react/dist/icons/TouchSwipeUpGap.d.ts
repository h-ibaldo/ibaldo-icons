import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchSwipeUpGapProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchSwipeUpGap: ForwardRefExoticComponent<TouchSwipeUpGapProps & RefAttributes<SVGSVGElement>>;

export default TouchSwipeUpGap;
export { TouchSwipeUpGap };
