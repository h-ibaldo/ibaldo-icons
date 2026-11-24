import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipArrowUpVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipArrowUpVertical: ForwardRefExoticComponent<PaperclipArrowUpVerticalProps & RefAttributes<SVGSVGElement>>;

export default PaperclipArrowUpVertical;
export { PaperclipArrowUpVertical };
