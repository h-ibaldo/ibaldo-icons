import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperclipXRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperclipXRound: ForwardRefExoticComponent<PaperclipXRoundProps & RefAttributes<SVGSVGElement>>;

export default PaperclipXRound;
export { PaperclipXRound };
