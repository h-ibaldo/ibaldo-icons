import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Poll5VerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Poll5Vertical: ForwardRefExoticComponent<Poll5VerticalProps & RefAttributes<SVGSVGElement>>;

export default Poll5Vertical;
export { Poll5Vertical };
