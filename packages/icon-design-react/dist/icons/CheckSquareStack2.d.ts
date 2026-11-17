import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckSquareStack2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckSquareStack2: ForwardRefExoticComponent<CheckSquareStack2Props & RefAttributes<SVGSVGElement>>;

export default CheckSquareStack2;
export { CheckSquareStack2 };
