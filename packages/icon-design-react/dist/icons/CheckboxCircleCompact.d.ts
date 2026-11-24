import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckboxCircleCompactProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckboxCircleCompact: ForwardRefExoticComponent<CheckboxCircleCompactProps & RefAttributes<SVGSVGElement>>;

export default CheckboxCircleCompact;
export { CheckboxCircleCompact };
