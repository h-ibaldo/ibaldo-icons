import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipSquareOpenLongProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipSquareOpenLong: ForwardRefExoticComponent<PaperclipSquareOpenLongProps & RefAttributes<SVGSVGElement>>;

export default PaperclipSquareOpenLong;
export { PaperclipSquareOpenLong };
