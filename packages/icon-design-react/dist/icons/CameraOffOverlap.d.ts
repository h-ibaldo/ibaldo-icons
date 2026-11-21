import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CameraOffOverlapProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CameraOffOverlap: ForwardRefExoticComponent<CameraOffOverlapProps & RefAttributes<SVGSVGElement>>;

export default CameraOffOverlap;
export { CameraOffOverlap };
