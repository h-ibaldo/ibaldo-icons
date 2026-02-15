import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Poll4VerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Poll4Vertical: ForwardRefExoticComponent<Poll4VerticalProps & RefAttributes<SVGSVGElement>>;

export default Poll4Vertical;
export { Poll4Vertical };
