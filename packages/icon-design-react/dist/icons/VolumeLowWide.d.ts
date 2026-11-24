import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VolumeLowWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VolumeLowWide: ForwardRefExoticComponent<VolumeLowWideProps & RefAttributes<SVGSVGElement>>;

export default VolumeLowWide;
export { VolumeLowWide };
