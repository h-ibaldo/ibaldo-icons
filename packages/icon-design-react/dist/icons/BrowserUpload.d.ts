import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserUploadProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserUpload: ForwardRefExoticComponent<BrowserUploadProps & RefAttributes<SVGSVGElement>>;

export default BrowserUpload;
export { BrowserUpload };
