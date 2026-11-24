import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CameraProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Camera: ForwardRefExoticComponent<CameraProps & RefAttributes<SVGSVGElement>>;

export default Camera;
export { Camera };
