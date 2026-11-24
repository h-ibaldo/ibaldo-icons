import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipCircleArrowLeftProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipCircleArrowLeft: ForwardRefExoticComponent<PaperclipCircleArrowLeftProps & RefAttributes<SVGSVGElement>>;

export default PaperclipCircleArrowLeft;
export { PaperclipCircleArrowLeft };
