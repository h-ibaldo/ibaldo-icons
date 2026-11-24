import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipCircleXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipCircleX: ForwardRefExoticComponent<PaperclipCircleXProps & RefAttributes<SVGSVGElement>>;

export default PaperclipCircleX;
export { PaperclipCircleX };
