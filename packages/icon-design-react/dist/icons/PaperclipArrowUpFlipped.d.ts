import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipArrowUpFlippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipArrowUpFlipped: ForwardRefExoticComponent<PaperclipArrowUpFlippedProps & RefAttributes<SVGSVGElement>>;

export default PaperclipArrowUpFlipped;
export { PaperclipArrowUpFlipped };
