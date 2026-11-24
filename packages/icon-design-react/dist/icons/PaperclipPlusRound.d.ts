import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipPlusRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipPlusRound: ForwardRefExoticComponent<PaperclipPlusRoundProps & RefAttributes<SVGSVGElement>>;

export default PaperclipPlusRound;
export { PaperclipPlusRound };
