import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UploadFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UploadFlat: ForwardRefExoticComponent<UploadFlatProps & RefAttributes<SVGSVGElement>>;

export default UploadFlat;
export { UploadFlat };
