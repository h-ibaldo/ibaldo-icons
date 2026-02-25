import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Clock12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Clock12: ForwardRefExoticComponent<Clock12Props & RefAttributes<SVGSVGElement>>;

export default Clock12;
export { Clock12 };
