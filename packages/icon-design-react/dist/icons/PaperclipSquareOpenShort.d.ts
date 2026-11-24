import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipSquareOpenShortProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipSquareOpenShort: ForwardRefExoticComponent<PaperclipSquareOpenShortProps & RefAttributes<SVGSVGElement>>;

export default PaperclipSquareOpenShort;
export { PaperclipSquareOpenShort };
