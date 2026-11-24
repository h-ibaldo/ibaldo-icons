import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipVertical: ForwardRefExoticComponent<PaperclipVerticalProps & RefAttributes<SVGSVGElement>>;

export default PaperclipVertical;
export { PaperclipVertical };
