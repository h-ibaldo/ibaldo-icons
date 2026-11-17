import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipMinusNarrowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipMinusNarrow: ForwardRefExoticComponent<PaperclipMinusNarrowProps & RefAttributes<SVGSVGElement>>;

export default PaperclipMinusNarrow;
export { PaperclipMinusNarrow };
