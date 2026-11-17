import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardCodeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardCode: ForwardRefExoticComponent<ClipboardCodeProps & RefAttributes<SVGSVGElement>>;

export default ClipboardCode;
export { ClipboardCode };
