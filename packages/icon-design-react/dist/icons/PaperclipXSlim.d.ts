import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipXSlimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipXSlim: ForwardRefExoticComponent<PaperclipXSlimProps & RefAttributes<SVGSVGElement>>;

export default PaperclipXSlim;
export { PaperclipXSlim };
