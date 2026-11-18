import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipSquareOpenVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipSquareOpenVertical: ForwardRefExoticComponent<PaperclipSquareOpenVerticalProps & RefAttributes<SVGSVGElement>>;

export default PaperclipSquareOpenVertical;
export { PaperclipSquareOpenVertical };
