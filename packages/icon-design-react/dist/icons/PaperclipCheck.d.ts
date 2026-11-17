import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipCheck: ForwardRefExoticComponent<PaperclipCheckProps & RefAttributes<SVGSVGElement>>;

export default PaperclipCheck;
export { PaperclipCheck };
