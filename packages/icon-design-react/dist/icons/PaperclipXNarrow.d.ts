import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipXNarrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipXNarrow: ForwardRefExoticComponent<PaperclipXNarrowProps & RefAttributes<SVGSVGElement>>;

export default PaperclipXNarrow;
export { PaperclipXNarrow };
