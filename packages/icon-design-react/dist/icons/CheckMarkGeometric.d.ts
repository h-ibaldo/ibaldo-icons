import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckMarkGeometricProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckMarkGeometric: ForwardRefExoticComponent<CheckMarkGeometricProps & RefAttributes<SVGSVGElement>>;

export default CheckMarkGeometric;
export { CheckMarkGeometric };
