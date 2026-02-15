import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckboxDropAddCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckboxDropAddCircle: ForwardRefExoticComponent<CheckboxDropAddCircleProps & RefAttributes<SVGSVGElement>>;

export default CheckboxDropAddCircle;
export { CheckboxDropAddCircle };
