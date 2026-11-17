import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipCircleCheckLongProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipCircleCheckLong: ForwardRefExoticComponent<PaperclipCircleCheckLongProps & RefAttributes<SVGSVGElement>>;

export default PaperclipCircleCheckLong;
export { PaperclipCircleCheckLong };
