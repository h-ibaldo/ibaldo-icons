import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardListPlusCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardListPlusCircle: ForwardRefExoticComponent<ClipboardListPlusCircleProps & RefAttributes<SVGSVGElement>>;

export default ClipboardListPlusCircle;
export { ClipboardListPlusCircle };
