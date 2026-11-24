import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipCircleXLongProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipCircleXLong: ForwardRefExoticComponent<PaperclipCircleXLongProps & RefAttributes<SVGSVGElement>>;

export default PaperclipCircleXLong;
export { PaperclipCircleXLong };
