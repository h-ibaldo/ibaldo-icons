import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WarningCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WarningCircle: ForwardRefExoticComponent<WarningCircleProps & RefAttributes<SVGSVGElement>>;

export default WarningCircle;
export { WarningCircle };
