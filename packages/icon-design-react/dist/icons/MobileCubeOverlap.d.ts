import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MobileCubeOverlapProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MobileCubeOverlap: ForwardRefExoticComponent<MobileCubeOverlapProps & RefAttributes<SVGSVGElement>>;

export default MobileCubeOverlap;
export { MobileCubeOverlap };
