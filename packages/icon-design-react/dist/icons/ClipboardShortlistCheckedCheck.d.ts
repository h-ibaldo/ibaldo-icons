import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardShortlistCheckedCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardShortlistCheckedCheck: ForwardRefExoticComponent<ClipboardShortlistCheckedCheckProps & RefAttributes<SVGSVGElement>>;

export default ClipboardShortlistCheckedCheck;
export { ClipboardShortlistCheckedCheck };
