import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VolumeHighWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VolumeHighWide: ForwardRefExoticComponent<VolumeHighWideProps & RefAttributes<SVGSVGElement>>;

export default VolumeHighWide;
export { VolumeHighWide };
