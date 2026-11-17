import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RotatedSquareAlertProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RotatedSquareAlert: ForwardRefExoticComponent<RotatedSquareAlertProps & RefAttributes<SVGSVGElement>>;

export default RotatedSquareAlert;
export { RotatedSquareAlert };
