import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CameraOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CameraOff: ForwardRefExoticComponent<CameraOffProps & RefAttributes<SVGSVGElement>>;

export default CameraOff;
export { CameraOff };
