import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CameraCompactProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CameraCompact: ForwardRefExoticComponent<CameraCompactProps & RefAttributes<SVGSVGElement>>;

export default CameraCompact;
export { CameraCompact };
