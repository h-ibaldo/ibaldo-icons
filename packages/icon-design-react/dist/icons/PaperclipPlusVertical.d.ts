import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipPlusVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipPlusVertical: ForwardRefExoticComponent<PaperclipPlusVerticalProps & RefAttributes<SVGSVGElement>>;

export default PaperclipPlusVertical;
export { PaperclipPlusVertical };
