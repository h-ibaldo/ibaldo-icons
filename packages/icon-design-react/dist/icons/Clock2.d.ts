import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Clock2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Clock2: ForwardRefExoticComponent<Clock2Props & RefAttributes<SVGSVGElement>>;

export default Clock2;
export { Clock2 };
