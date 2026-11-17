import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardShortlistCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardShortlistCheck: ForwardRefExoticComponent<ClipboardShortlistCheckProps & RefAttributes<SVGSVGElement>>;

export default ClipboardShortlistCheck;
export { ClipboardShortlistCheck };
