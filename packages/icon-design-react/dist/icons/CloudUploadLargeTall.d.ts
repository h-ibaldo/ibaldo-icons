import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudUploadLargeTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudUploadLargeTall: ForwardRefExoticComponent<CloudUploadLargeTallProps & RefAttributes<SVGSVGElement>>;

export default CloudUploadLargeTall;
export { CloudUploadLargeTall };
