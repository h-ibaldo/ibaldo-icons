import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardListPlusShortProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardListPlusShort: ForwardRefExoticComponent<ClipboardListPlusShortProps & RefAttributes<SVGSVGElement>>;

export default ClipboardListPlusShort;
export { ClipboardListPlusShort };
