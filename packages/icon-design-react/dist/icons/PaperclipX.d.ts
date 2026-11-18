import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipX: ForwardRefExoticComponent<PaperclipXProps & RefAttributes<SVGSVGElement>>;

export default PaperclipX;
export { PaperclipX };
