import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Poll2VerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Poll2Vertical: ForwardRefExoticComponent<Poll2VerticalProps & RefAttributes<SVGSVGElement>>;

export default Poll2Vertical;
export { Poll2Vertical };
