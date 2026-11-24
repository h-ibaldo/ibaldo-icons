import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CameraRetroProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CameraRetro: ForwardRefExoticComponent<CameraRetroProps & RefAttributes<SVGSVGElement>>;

export default CameraRetro;
export { CameraRetro };
