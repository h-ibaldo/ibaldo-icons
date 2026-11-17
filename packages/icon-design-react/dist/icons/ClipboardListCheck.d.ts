import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardListCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardListCheck: ForwardRefExoticComponent<ClipboardListCheckProps & RefAttributes<SVGSVGElement>>;

export default ClipboardListCheck;
export { ClipboardListCheck };
