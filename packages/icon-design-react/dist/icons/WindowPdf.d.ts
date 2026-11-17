import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowPdfProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowPdf: ForwardRefExoticComponent<WindowPdfProps & RefAttributes<SVGSVGElement>>;

export default WindowPdf;
export { WindowPdf };
