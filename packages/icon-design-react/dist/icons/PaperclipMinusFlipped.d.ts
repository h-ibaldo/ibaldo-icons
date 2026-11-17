import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipMinusFlippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipMinusFlipped: ForwardRefExoticComponent<PaperclipMinusFlippedProps & RefAttributes<SVGSVGElement>>;

export default PaperclipMinusFlipped;
export { PaperclipMinusFlipped };
