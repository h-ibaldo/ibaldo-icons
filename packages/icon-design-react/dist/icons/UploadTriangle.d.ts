import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UploadTriangleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UploadTriangle: ForwardRefExoticComponent<UploadTriangleProps & RefAttributes<SVGSVGElement>>;

export default UploadTriangle;
export { UploadTriangle };
