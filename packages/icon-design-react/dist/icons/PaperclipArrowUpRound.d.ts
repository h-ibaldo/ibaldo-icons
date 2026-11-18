import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipArrowUpRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipArrowUpRound: ForwardRefExoticComponent<PaperclipArrowUpRoundProps & RefAttributes<SVGSVGElement>>;

export default PaperclipArrowUpRound;
export { PaperclipArrowUpRound };
