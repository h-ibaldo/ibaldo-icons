import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipCheckFlippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipCheckFlipped: ForwardRefExoticComponent<PaperclipCheckFlippedProps & RefAttributes<SVGSVGElement>>;

export default PaperclipCheckFlipped;
export { PaperclipCheckFlipped };
