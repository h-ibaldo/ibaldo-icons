import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipCheckRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipCheckRound: ForwardRefExoticComponent<PaperclipCheckRoundProps & RefAttributes<SVGSVGElement>>;

export default PaperclipCheckRound;
export { PaperclipCheckRound };
