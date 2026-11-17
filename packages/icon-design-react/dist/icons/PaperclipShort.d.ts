import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipShortProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipShort: ForwardRefExoticComponent<PaperclipShortProps & RefAttributes<SVGSVGElement>>;

export default PaperclipShort;
export { PaperclipShort };
