import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardListPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardListPlus: ForwardRefExoticComponent<ClipboardListPlusProps & RefAttributes<SVGSVGElement>>;

export default ClipboardListPlus;
export { ClipboardListPlus };
