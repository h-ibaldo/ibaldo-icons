import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckMark4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckMark4: ForwardRefExoticComponent<CheckMark4Props & RefAttributes<SVGSVGElement>>;

export default CheckMark4;
export { CheckMark4 };
