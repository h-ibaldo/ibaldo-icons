import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UploadArrow1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UploadArrow1: ForwardRefExoticComponent<UploadArrow1Props & RefAttributes<SVGSVGElement>>;

export default UploadArrow1;
export { UploadArrow1 };
