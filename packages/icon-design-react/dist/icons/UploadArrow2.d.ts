import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UploadArrow2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UploadArrow2: ForwardRefExoticComponent<UploadArrow2Props & RefAttributes<SVGSVGElement>>;

export default UploadArrow2;
export { UploadArrow2 };
