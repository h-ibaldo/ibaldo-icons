import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Poll1VerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Poll1Vertical: ForwardRefExoticComponent<Poll1VerticalProps & RefAttributes<SVGSVGElement>>;

export default Poll1Vertical;
export { Poll1Vertical };
