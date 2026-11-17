import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardListPlusCircleShortProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardListPlusCircleShort: ForwardRefExoticComponent<ClipboardListPlusCircleShortProps & RefAttributes<SVGSVGElement>>;

export default ClipboardListPlusCircleShort;
export { ClipboardListPlusCircleShort };
