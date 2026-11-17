import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockPaperclipTiltedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockPaperclipTilted: ForwardRefExoticComponent<ClockPaperclipTiltedProps & RefAttributes<SVGSVGElement>>;

export default ClockPaperclipTilted;
export { ClockPaperclipTilted };
