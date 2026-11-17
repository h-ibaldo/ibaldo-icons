import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UploadTrayProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UploadTray: ForwardRefExoticComponent<UploadTrayProps & RefAttributes<SVGSVGElement>>;

export default UploadTray;
export { UploadTray };
