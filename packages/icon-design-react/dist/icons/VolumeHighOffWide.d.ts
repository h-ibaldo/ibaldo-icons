import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface VolumeHighOffWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const VolumeHighOffWide: ForwardRefExoticComponent<VolumeHighOffWideProps & RefAttributes<SVGSVGElement>>;

export default VolumeHighOffWide;
export { VolumeHighOffWide };
