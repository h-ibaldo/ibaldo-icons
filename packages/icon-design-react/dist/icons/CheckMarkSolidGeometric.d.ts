import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckMarkSolidGeometricProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckMarkSolidGeometric: ForwardRefExoticComponent<CheckMarkSolidGeometricProps & RefAttributes<SVGSVGElement>>;

export default CheckMarkSolidGeometric;
export { CheckMarkSolidGeometric };
