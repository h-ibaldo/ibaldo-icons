import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchSwipeLeftGapProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchSwipeLeftGap: ForwardRefExoticComponent<TouchSwipeLeftGapProps & RefAttributes<SVGSVGElement>>;

export default TouchSwipeLeftGap;
export { TouchSwipeLeftGap };
