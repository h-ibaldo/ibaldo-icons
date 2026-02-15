import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckMark3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckMark3: ForwardRefExoticComponent<CheckMark3Props & RefAttributes<SVGSVGElement>>;

export default CheckMark3;
export { CheckMark3 };
