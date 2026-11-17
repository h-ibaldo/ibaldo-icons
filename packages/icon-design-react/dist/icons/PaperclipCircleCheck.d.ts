import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipCircleCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipCircleCheck: ForwardRefExoticComponent<PaperclipCircleCheckProps & RefAttributes<SVGSVGElement>>;

export default PaperclipCircleCheck;
export { PaperclipCircleCheck };
