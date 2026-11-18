import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipCircleCheckShortProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipCircleCheckShort: ForwardRefExoticComponent<PaperclipCircleCheckShortProps & RefAttributes<SVGSVGElement>>;

export default PaperclipCircleCheckShort;
export { PaperclipCircleCheckShort };
