import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface UploadTray1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const UploadTray1: ForwardRefExoticComponent<UploadTray1Props & RefAttributes<SVGSVGElement>>;

export default UploadTray1;
export { UploadTray1 };
