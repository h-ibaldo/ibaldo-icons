import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Poll1HorizontalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Poll1Horizontal: ForwardRefExoticComponent<Poll1HorizontalProps & RefAttributes<SVGSVGElement>>;

export default Poll1Horizontal;
export { Poll1Horizontal };
