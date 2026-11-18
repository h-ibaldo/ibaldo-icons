import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardListMinusShortProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardListMinusShort: ForwardRefExoticComponent<ClipboardListMinusShortProps & RefAttributes<SVGSVGElement>>;

export default ClipboardListMinusShort;
export { ClipboardListMinusShort };
