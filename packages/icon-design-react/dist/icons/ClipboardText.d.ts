import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardTextProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardText: ForwardRefExoticComponent<ClipboardTextProps & RefAttributes<SVGSVGElement>>;

export default ClipboardText;
export { ClipboardText };
