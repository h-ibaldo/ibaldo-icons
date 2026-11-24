import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PointerAlertCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PointerAlertCircle: ForwardRefExoticComponent<PointerAlertCircleProps & RefAttributes<SVGSVGElement>>;

export default PointerAlertCircle;
export { PointerAlertCircle };
