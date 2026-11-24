import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckSquareNestedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckSquareNested: ForwardRefExoticComponent<CheckSquareNestedProps & RefAttributes<SVGSVGElement>>;

export default CheckSquareNested;
export { CheckSquareNested };
