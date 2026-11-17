import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardListCheckXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardListCheckX: ForwardRefExoticComponent<ClipboardListCheckXProps & RefAttributes<SVGSVGElement>>;

export default ClipboardListCheckX;
export { ClipboardListCheckX };
