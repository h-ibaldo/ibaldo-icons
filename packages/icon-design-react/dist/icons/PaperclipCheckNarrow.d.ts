import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipCheckNarrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipCheckNarrow: ForwardRefExoticComponent<PaperclipCheckNarrowProps & RefAttributes<SVGSVGElement>>;

export default PaperclipCheckNarrow;
export { PaperclipCheckNarrow };
