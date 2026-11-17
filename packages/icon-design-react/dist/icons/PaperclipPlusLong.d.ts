import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipPlusLongProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipPlusLong: ForwardRefExoticComponent<PaperclipPlusLongProps & RefAttributes<SVGSVGElement>>;

export default PaperclipPlusLong;
export { PaperclipPlusLong };
