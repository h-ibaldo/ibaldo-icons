import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipCircle: ForwardRefExoticComponent<PaperclipCircleProps & RefAttributes<SVGSVGElement>>;

export default PaperclipCircle;
export { PaperclipCircle };
