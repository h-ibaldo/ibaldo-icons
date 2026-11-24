import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WarningRaysProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WarningRays: ForwardRefExoticComponent<WarningRaysProps & RefAttributes<SVGSVGElement>>;

export default WarningRays;
export { WarningRays };
