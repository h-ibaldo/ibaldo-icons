import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipMinusSlimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipMinusSlim: ForwardRefExoticComponent<PaperclipMinusSlimProps & RefAttributes<SVGSVGElement>>;

export default PaperclipMinusSlim;
export { PaperclipMinusSlim };
