import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipArrowUpShortProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipArrowUpShort: ForwardRefExoticComponent<PaperclipArrowUpShortProps & RefAttributes<SVGSVGElement>>;

export default PaperclipArrowUpShort;
export { PaperclipArrowUpShort };
