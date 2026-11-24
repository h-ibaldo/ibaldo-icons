import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardMinusCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardMinusCircle: ForwardRefExoticComponent<ClipboardMinusCircleProps & RefAttributes<SVGSVGElement>>;

export default ClipboardMinusCircle;
export { ClipboardMinusCircle };
