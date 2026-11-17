import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudUpload2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudUpload2: ForwardRefExoticComponent<CloudUpload2Props & RefAttributes<SVGSVGElement>>;

export default CloudUpload2;
export { CloudUpload2 };
