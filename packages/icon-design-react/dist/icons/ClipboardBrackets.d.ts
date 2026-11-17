import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardBracketsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardBrackets: ForwardRefExoticComponent<ClipboardBracketsProps & RefAttributes<SVGSVGElement>>;

export default ClipboardBrackets;
export { ClipboardBrackets };
