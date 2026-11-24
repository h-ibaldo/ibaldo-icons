import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BoxCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BoxCheck: ForwardRefExoticComponent<BoxCheckProps & RefAttributes<SVGSVGElement>>;

export default BoxCheck;
export { BoxCheck };
