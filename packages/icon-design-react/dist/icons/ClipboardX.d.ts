import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardX: ForwardRefExoticComponent<ClipboardXProps & RefAttributes<SVGSVGElement>>;

export default ClipboardX;
export { ClipboardX };
