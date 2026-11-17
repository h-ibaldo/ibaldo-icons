import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipMinus: ForwardRefExoticComponent<PaperclipMinusProps & RefAttributes<SVGSVGElement>>;

export default PaperclipMinus;
export { PaperclipMinus };
