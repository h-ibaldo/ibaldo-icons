import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipArrowUpLongProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipArrowUpLong: ForwardRefExoticComponent<PaperclipArrowUpLongProps & RefAttributes<SVGSVGElement>>;

export default PaperclipArrowUpLong;
export { PaperclipArrowUpLong };
