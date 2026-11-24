import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardListXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardListX: ForwardRefExoticComponent<ClipboardListXProps & RefAttributes<SVGSVGElement>>;

export default ClipboardListX;
export { ClipboardListX };
