import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Poll5HorizontalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Poll5Horizontal: ForwardRefExoticComponent<Poll5HorizontalProps & RefAttributes<SVGSVGElement>>;

export default Poll5Horizontal;
export { Poll5Horizontal };
