import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipXLongProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipXLong: ForwardRefExoticComponent<PaperclipXLongProps & RefAttributes<SVGSVGElement>>;

export default PaperclipXLong;
export { PaperclipXLong };
