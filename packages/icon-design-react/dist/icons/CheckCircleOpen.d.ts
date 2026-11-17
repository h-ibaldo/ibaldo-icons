import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckCircleOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckCircleOpen: ForwardRefExoticComponent<CheckCircleOpenProps & RefAttributes<SVGSVGElement>>;

export default CheckCircleOpen;
export { CheckCircleOpen };
