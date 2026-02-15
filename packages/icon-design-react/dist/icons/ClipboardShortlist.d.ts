import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardShortlistProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardShortlist: ForwardRefExoticComponent<ClipboardShortlistProps & RefAttributes<SVGSVGElement>>;

export default ClipboardShortlist;
export { ClipboardShortlist };
