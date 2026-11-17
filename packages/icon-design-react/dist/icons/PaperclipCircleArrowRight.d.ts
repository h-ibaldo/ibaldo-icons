import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipCircleArrowRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipCircleArrowRight: ForwardRefExoticComponent<PaperclipCircleArrowRightProps & RefAttributes<SVGSVGElement>>;

export default PaperclipCircleArrowRight;
export { PaperclipCircleArrowRight };
