import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardShortlistPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardShortlistPlus: ForwardRefExoticComponent<ClipboardShortlistPlusProps & RefAttributes<SVGSVGElement>>;

export default ClipboardShortlistPlus;
export { ClipboardShortlistPlus };
