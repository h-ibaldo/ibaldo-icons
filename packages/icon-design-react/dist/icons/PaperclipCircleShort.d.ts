import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipCircleShortProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipCircleShort: ForwardRefExoticComponent<PaperclipCircleShortProps & RefAttributes<SVGSVGElement>>;

export default PaperclipCircleShort;
export { PaperclipCircleShort };
