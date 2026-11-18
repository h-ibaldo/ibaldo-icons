import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipSquareLongProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipSquareLong: ForwardRefExoticComponent<PaperclipSquareLongProps & RefAttributes<SVGSVGElement>>;

export default PaperclipSquareLong;
export { PaperclipSquareLong };
