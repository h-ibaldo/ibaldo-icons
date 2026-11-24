import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipMinusShortProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipMinusShort: ForwardRefExoticComponent<PaperclipMinusShortProps & RefAttributes<SVGSVGElement>>;

export default PaperclipMinusShort;
export { PaperclipMinusShort };
