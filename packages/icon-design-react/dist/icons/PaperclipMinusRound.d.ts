import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipMinusRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipMinusRound: ForwardRefExoticComponent<PaperclipMinusRoundProps & RefAttributes<SVGSVGElement>>;

export default PaperclipMinusRound;
export { PaperclipMinusRound };
