import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CameraSyncProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CameraSync: ForwardRefExoticComponent<CameraSyncProps & RefAttributes<SVGSVGElement>>;

export default CameraSync;
export { CameraSync };
