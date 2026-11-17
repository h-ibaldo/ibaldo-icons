import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipPlusSlimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipPlusSlim: ForwardRefExoticComponent<PaperclipPlusSlimProps & RefAttributes<SVGSVGElement>>;

export default PaperclipPlusSlim;
export { PaperclipPlusSlim };
