import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardLinkTiltedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardLinkTilted: ForwardRefExoticComponent<ClipboardLinkTiltedProps & RefAttributes<SVGSVGElement>>;

export default ClipboardLinkTilted;
export { ClipboardLinkTilted };
