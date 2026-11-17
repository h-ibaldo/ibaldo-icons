import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell3: ForwardRefExoticComponent<Bell3Props & RefAttributes<SVGSVGElement>>;

export default Bell3;
export { Bell3 };
