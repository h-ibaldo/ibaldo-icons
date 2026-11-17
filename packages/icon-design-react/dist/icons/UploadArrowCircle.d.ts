import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UploadArrowCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UploadArrowCircle: ForwardRefExoticComponent<UploadArrowCircleProps & RefAttributes<SVGSVGElement>>;

export default UploadArrowCircle;
export { UploadArrowCircle };
