import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GearUploadProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GearUpload: ForwardRefExoticComponent<GearUploadProps & RefAttributes<SVGSVGElement>>;

export default GearUpload;
export { GearUpload };
