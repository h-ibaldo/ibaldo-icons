import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipSquareShortProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipSquareShort: ForwardRefExoticComponent<PaperclipSquareShortProps & RefAttributes<SVGSVGElement>>;

export default PaperclipSquareShort;
export { PaperclipSquareShort };
