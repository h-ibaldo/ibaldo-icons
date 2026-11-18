import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipRound: ForwardRefExoticComponent<PaperclipRoundProps & RefAttributes<SVGSVGElement>>;

export default PaperclipRound;
export { PaperclipRound };
