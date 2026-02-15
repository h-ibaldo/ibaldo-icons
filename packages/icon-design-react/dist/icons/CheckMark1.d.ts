import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckMark1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckMark1: ForwardRefExoticComponent<CheckMark1Props & RefAttributes<SVGSVGElement>>;

export default CheckMark1;
export { CheckMark1 };
