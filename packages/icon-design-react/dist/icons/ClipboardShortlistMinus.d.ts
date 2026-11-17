import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardShortlistMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardShortlistMinus: ForwardRefExoticComponent<ClipboardShortlistMinusProps & RefAttributes<SVGSVGElement>>;

export default ClipboardShortlistMinus;
export { ClipboardShortlistMinus };
