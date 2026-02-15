import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Poll4HorizontalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Poll4Horizontal: ForwardRefExoticComponent<Poll4HorizontalProps & RefAttributes<SVGSVGElement>>;

export default Poll4Horizontal;
export { Poll4Horizontal };
