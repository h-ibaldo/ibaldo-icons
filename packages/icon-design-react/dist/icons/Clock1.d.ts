import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Clock1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Clock1: ForwardRefExoticComponent<Clock1Props & RefAttributes<SVGSVGElement>>;

export default Clock1;
export { Clock1 };
