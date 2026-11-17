import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VolumeMediumProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VolumeMedium: ForwardRefExoticComponent<VolumeMediumProps & RefAttributes<SVGSVGElement>>;

export default VolumeMedium;
export { VolumeMedium };
