import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudUploadBaseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudUploadBase: ForwardRefExoticComponent<CloudUploadBaseProps & RefAttributes<SVGSVGElement>>;

export default CloudUploadBase;
export { CloudUploadBase };
