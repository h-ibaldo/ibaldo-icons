import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchSwipeDownGapProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchSwipeDownGap: ForwardRefExoticComponent<TouchSwipeDownGapProps & RefAttributes<SVGSVGElement>>;

export default TouchSwipeDownGap;
export { TouchSwipeDownGap };
