import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipCheckSlimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipCheckSlim: ForwardRefExoticComponent<PaperclipCheckSlimProps & RefAttributes<SVGSVGElement>>;

export default PaperclipCheckSlim;
export { PaperclipCheckSlim };
