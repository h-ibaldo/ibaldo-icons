import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipCircleXShortProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipCircleXShort: ForwardRefExoticComponent<PaperclipCircleXShortProps & RefAttributes<SVGSVGElement>>;

export default PaperclipCircleXShort;
export { PaperclipCircleXShort };
