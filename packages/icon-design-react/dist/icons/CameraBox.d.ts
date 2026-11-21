import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CameraBoxProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CameraBox: ForwardRefExoticComponent<CameraBoxProps & RefAttributes<SVGSVGElement>>;

export default CameraBox;
export { CameraBox };
