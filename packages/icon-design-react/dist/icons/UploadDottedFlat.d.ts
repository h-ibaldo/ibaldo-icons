import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UploadDottedFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UploadDottedFlat: ForwardRefExoticComponent<UploadDottedFlatProps & RefAttributes<SVGSVGElement>>;

export default UploadDottedFlat;
export { UploadDottedFlat };
