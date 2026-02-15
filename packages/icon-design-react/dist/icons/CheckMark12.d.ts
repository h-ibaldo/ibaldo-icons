import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckMark12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckMark12: ForwardRefExoticComponent<CheckMark12Props & RefAttributes<SVGSVGElement>>;

export default CheckMark12;
export { CheckMark12 };
