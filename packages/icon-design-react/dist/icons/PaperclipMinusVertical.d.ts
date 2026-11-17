import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipMinusVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipMinusVertical: ForwardRefExoticComponent<PaperclipMinusVerticalProps & RefAttributes<SVGSVGElement>>;

export default PaperclipMinusVertical;
export { PaperclipMinusVertical };
