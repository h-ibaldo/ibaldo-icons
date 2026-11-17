import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipSlimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipSlim: ForwardRefExoticComponent<PaperclipSlimProps & RefAttributes<SVGSVGElement>>;

export default PaperclipSlim;
export { PaperclipSlim };
