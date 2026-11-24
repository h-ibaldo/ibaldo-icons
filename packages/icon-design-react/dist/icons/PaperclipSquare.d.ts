import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipSquare: ForwardRefExoticComponent<PaperclipSquareProps & RefAttributes<SVGSVGElement>>;

export default PaperclipSquare;
export { PaperclipSquare };
