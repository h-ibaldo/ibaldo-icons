import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipLongProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipLong: ForwardRefExoticComponent<PaperclipLongProps & RefAttributes<SVGSVGElement>>;

export default PaperclipLong;
export { PaperclipLong };
