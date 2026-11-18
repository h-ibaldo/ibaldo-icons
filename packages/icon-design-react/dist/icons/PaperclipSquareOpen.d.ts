import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipSquareOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipSquareOpen: ForwardRefExoticComponent<PaperclipSquareOpenProps & RefAttributes<SVGSVGElement>>;

export default PaperclipSquareOpen;
export { PaperclipSquareOpen };
