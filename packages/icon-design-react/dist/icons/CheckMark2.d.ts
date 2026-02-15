import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckMark2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckMark2: ForwardRefExoticComponent<CheckMark2Props & RefAttributes<SVGSVGElement>>;

export default CheckMark2;
export { CheckMark2 };
