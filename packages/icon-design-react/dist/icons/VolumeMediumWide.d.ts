import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VolumeMediumWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VolumeMediumWide: ForwardRefExoticComponent<VolumeMediumWideProps & RefAttributes<SVGSVGElement>>;

export default VolumeMediumWide;
export { VolumeMediumWide };
