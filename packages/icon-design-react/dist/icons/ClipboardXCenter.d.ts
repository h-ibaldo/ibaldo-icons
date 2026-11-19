import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardXCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardXCenter: ForwardRefExoticComponent<ClipboardXCenterProps & RefAttributes<SVGSVGElement>>;

export default ClipboardXCenter;
export { ClipboardXCenter };
