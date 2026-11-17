import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockLinkTiltedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockLinkTilted: ForwardRefExoticComponent<ClockLinkTiltedProps & RefAttributes<SVGSVGElement>>;

export default ClockLinkTilted;
export { ClockLinkTilted };
