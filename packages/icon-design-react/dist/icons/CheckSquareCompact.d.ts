import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckSquareCompactProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckSquareCompact: ForwardRefExoticComponent<CheckSquareCompactProps & RefAttributes<SVGSVGElement>>;

export default CheckSquareCompact;
export { CheckSquareCompact };
