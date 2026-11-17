import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UploadArrowBox3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UploadArrowBox3: ForwardRefExoticComponent<UploadArrowBox3Props & RefAttributes<SVGSVGElement>>;

export default UploadArrowBox3;
export { UploadArrowBox3 };
