import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardListMinusCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardListMinusCircle: ForwardRefExoticComponent<ClipboardListMinusCircleProps & RefAttributes<SVGSVGElement>>;

export default ClipboardListMinusCircle;
export { ClipboardListMinusCircle };
