import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardLinkProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardLink: ForwardRefExoticComponent<ClipboardLinkProps & RefAttributes<SVGSVGElement>>;

export default ClipboardLink;
export { ClipboardLink };
