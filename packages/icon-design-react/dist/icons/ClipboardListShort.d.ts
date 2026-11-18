import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardListShortProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardListShort: ForwardRefExoticComponent<ClipboardListShortProps & RefAttributes<SVGSVGElement>>;

export default ClipboardListShort;
export { ClipboardListShort };
