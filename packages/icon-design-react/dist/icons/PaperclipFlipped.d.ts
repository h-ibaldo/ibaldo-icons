import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipFlippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipFlipped: ForwardRefExoticComponent<PaperclipFlippedProps & RefAttributes<SVGSVGElement>>;

export default PaperclipFlipped;
export { PaperclipFlipped };
