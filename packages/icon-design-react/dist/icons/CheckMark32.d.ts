import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckMark32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckMark32: ForwardRefExoticComponent<CheckMark32Props & RefAttributes<SVGSVGElement>>;

export default CheckMark32;
export { CheckMark32 };
