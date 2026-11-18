import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipPlusShortProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipPlusShort: ForwardRefExoticComponent<PaperclipPlusShortProps & RefAttributes<SVGSVGElement>>;

export default PaperclipPlusShort;
export { PaperclipPlusShort };
