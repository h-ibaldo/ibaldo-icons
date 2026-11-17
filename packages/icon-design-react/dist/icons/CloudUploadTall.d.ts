import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudUploadTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudUploadTall: ForwardRefExoticComponent<CloudUploadTallProps & RefAttributes<SVGSVGElement>>;

export default CloudUploadTall;
export { CloudUploadTall };
