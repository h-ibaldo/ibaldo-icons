import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckSquareOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckSquareOpen: ForwardRefExoticComponent<CheckSquareOpenProps & RefAttributes<SVGSVGElement>>;

export default CheckSquareOpen;
export { CheckSquareOpen };
