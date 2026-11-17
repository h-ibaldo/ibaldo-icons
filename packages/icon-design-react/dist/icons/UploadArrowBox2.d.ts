import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UploadArrowBox2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UploadArrowBox2: ForwardRefExoticComponent<UploadArrowBox2Props & RefAttributes<SVGSVGElement>>;

export default UploadArrowBox2;
export { UploadArrowBox2 };
