import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipArrowUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipArrowUp: ForwardRefExoticComponent<PaperclipArrowUpProps & RefAttributes<SVGSVGElement>>;

export default PaperclipArrowUp;
export { PaperclipArrowUp };
