import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipPlus: ForwardRefExoticComponent<PaperclipPlusProps & RefAttributes<SVGSVGElement>>;

export default PaperclipPlus;
export { PaperclipPlus };
