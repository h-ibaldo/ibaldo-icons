import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudUploadBaseTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudUploadBaseTall: ForwardRefExoticComponent<CloudUploadBaseTallProps & RefAttributes<SVGSVGElement>>;

export default CloudUploadBaseTall;
export { CloudUploadBaseTall };
