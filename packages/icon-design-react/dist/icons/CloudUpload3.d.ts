import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudUpload3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudUpload3: ForwardRefExoticComponent<CloudUpload3Props & RefAttributes<SVGSVGElement>>;

export default CloudUpload3;
export { CloudUpload3 };
