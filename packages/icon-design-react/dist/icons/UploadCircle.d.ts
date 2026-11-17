import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UploadCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UploadCircle: ForwardRefExoticComponent<UploadCircleProps & RefAttributes<SVGSVGElement>>;

export default UploadCircle;
export { UploadCircle };
