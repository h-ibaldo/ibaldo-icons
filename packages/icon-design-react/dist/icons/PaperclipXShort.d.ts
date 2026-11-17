import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipXShortProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipXShort: ForwardRefExoticComponent<PaperclipXShortProps & RefAttributes<SVGSVGElement>>;

export default PaperclipXShort;
export { PaperclipXShort };
