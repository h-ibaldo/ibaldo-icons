import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardPlusCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardPlusCircle: ForwardRefExoticComponent<ClipboardPlusCircleProps & RefAttributes<SVGSVGElement>>;

export default ClipboardPlusCircle;
export { ClipboardPlusCircle };
