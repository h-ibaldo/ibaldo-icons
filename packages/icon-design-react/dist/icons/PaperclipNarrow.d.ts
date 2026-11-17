import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipNarrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipNarrow: ForwardRefExoticComponent<PaperclipNarrowProps & RefAttributes<SVGSVGElement>>;

export default PaperclipNarrow;
export { PaperclipNarrow };
