import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CameraDetailedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CameraDetailed: ForwardRefExoticComponent<CameraDetailedProps & RefAttributes<SVGSVGElement>>;

export default CameraDetailed;
export { CameraDetailed };
