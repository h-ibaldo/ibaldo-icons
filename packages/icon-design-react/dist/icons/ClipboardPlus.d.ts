import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardPlus: ForwardRefExoticComponent<ClipboardPlusProps & RefAttributes<SVGSVGElement>>;

export default ClipboardPlus;
export { ClipboardPlus };
