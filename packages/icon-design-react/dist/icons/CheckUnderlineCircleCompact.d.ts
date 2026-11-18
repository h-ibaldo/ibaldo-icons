import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckUnderlineCircleCompactProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckUnderlineCircleCompact: ForwardRefExoticComponent<CheckUnderlineCircleCompactProps & RefAttributes<SVGSVGElement>>;

export default CheckUnderlineCircleCompact;
export { CheckUnderlineCircleCompact };
