import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipCheckLongProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipCheckLong: ForwardRefExoticComponent<PaperclipCheckLongProps & RefAttributes<SVGSVGElement>>;

export default PaperclipCheckLong;
export { PaperclipCheckLong };
