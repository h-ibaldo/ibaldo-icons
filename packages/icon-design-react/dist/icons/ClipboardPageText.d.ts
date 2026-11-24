import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardPageTextProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardPageText: ForwardRefExoticComponent<ClipboardPageTextProps & RefAttributes<SVGSVGElement>>;

export default ClipboardPageText;
export { ClipboardPageText };
