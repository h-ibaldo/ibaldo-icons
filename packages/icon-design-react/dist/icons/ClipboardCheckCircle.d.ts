import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardCheckCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardCheckCircle: ForwardRefExoticComponent<ClipboardCheckCircleProps & RefAttributes<SVGSVGElement>>;

export default ClipboardCheckCircle;
export { ClipboardCheckCircle };
