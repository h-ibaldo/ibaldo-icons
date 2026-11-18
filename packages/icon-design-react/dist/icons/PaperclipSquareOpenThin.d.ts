import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipSquareOpenThinProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipSquareOpenThin: ForwardRefExoticComponent<PaperclipSquareOpenThinProps & RefAttributes<SVGSVGElement>>;

export default PaperclipSquareOpenThin;
export { PaperclipSquareOpenThin };
