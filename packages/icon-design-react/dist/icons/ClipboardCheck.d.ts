import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardCheck: ForwardRefExoticComponent<ClipboardCheckProps & RefAttributes<SVGSVGElement>>;

export default ClipboardCheck;
export { ClipboardCheck };
