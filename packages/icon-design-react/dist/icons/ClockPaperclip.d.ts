import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockPaperclipProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockPaperclip: ForwardRefExoticComponent<ClockPaperclipProps & RefAttributes<SVGSVGElement>>;

export default ClockPaperclip;
export { ClockPaperclip };
