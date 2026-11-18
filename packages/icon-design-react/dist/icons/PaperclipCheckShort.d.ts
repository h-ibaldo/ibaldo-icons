import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipCheckShortProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipCheckShort: ForwardRefExoticComponent<PaperclipCheckShortProps & RefAttributes<SVGSVGElement>>;

export default PaperclipCheckShort;
export { PaperclipCheckShort };
