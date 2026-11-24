import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipPlusFlippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipPlusFlipped: ForwardRefExoticComponent<PaperclipPlusFlippedProps & RefAttributes<SVGSVGElement>>;

export default PaperclipPlusFlipped;
export { PaperclipPlusFlipped };
