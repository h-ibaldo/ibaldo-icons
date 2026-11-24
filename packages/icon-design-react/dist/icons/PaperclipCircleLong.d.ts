import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipCircleLongProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipCircleLong: ForwardRefExoticComponent<PaperclipCircleLongProps & RefAttributes<SVGSVGElement>>;

export default PaperclipCircleLong;
export { PaperclipCircleLong };
