import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UploadCircleFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UploadCircleFlat: ForwardRefExoticComponent<UploadCircleFlatProps & RefAttributes<SVGSVGElement>>;

export default UploadCircleFlat;
export { UploadCircleFlat };
