import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipArrowUpWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipArrowUpWide: ForwardRefExoticComponent<PaperclipArrowUpWideProps & RefAttributes<SVGSVGElement>>;

export default PaperclipArrowUpWide;
export { PaperclipArrowUpWide };
