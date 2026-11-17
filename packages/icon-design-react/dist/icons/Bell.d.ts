import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell: ForwardRefExoticComponent<BellProps & RefAttributes<SVGSVGElement>>;

export default Bell;
export { Bell };
