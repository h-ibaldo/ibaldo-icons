import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipMinusLongProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipMinusLong: ForwardRefExoticComponent<PaperclipMinusLongProps & RefAttributes<SVGSVGElement>>;

export default PaperclipMinusLong;
export { PaperclipMinusLong };
