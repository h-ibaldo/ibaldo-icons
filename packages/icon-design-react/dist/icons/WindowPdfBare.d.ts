import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowPdfBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowPdfBare: ForwardRefExoticComponent<WindowPdfBareProps & RefAttributes<SVGSVGElement>>;

export default WindowPdfBare;
export { WindowPdfBare };
