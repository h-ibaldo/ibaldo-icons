import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckboxCheckedCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckboxCheckedCircle: ForwardRefExoticComponent<CheckboxCheckedCircleProps & RefAttributes<SVGSVGElement>>;

export default CheckboxCheckedCircle;
export { CheckboxCheckedCircle };
