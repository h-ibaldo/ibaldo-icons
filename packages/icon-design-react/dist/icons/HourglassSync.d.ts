import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HourglassSyncProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HourglassSync: ForwardRefExoticComponent<HourglassSyncProps & RefAttributes<SVGSVGElement>>;

export default HourglassSync;
export { HourglassSync };
