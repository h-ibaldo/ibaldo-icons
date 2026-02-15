import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Poll2HorizontalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Poll2Horizontal: ForwardRefExoticComponent<Poll2HorizontalProps & RefAttributes<SVGSVGElement>>;

export default Poll2Horizontal;
export { Poll2Horizontal };
