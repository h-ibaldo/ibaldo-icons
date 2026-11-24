import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipArrowUpNarrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipArrowUpNarrow: ForwardRefExoticComponent<PaperclipArrowUpNarrowProps & RefAttributes<SVGSVGElement>>;

export default PaperclipArrowUpNarrow;
export { PaperclipArrowUpNarrow };
