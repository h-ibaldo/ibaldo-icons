import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardListCheckShortProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardListCheckShort: ForwardRefExoticComponent<ClipboardListCheckShortProps & RefAttributes<SVGSVGElement>>;

export default ClipboardListCheckShort;
export { ClipboardListCheckShort };
