import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudUploadLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudUploadLarge: ForwardRefExoticComponent<CloudUploadLargeProps & RefAttributes<SVGSVGElement>>;

export default CloudUploadLarge;
export { CloudUploadLarge };
