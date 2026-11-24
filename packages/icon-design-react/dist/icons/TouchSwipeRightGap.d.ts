import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchSwipeRightGapProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchSwipeRightGap: ForwardRefExoticComponent<TouchSwipeRightGapProps & RefAttributes<SVGSVGElement>>;

export default TouchSwipeRightGap;
export { TouchSwipeRightGap };
