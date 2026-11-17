import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardListCheckCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardListCheckCircle: ForwardRefExoticComponent<ClipboardListCheckCircleProps & RefAttributes<SVGSVGElement>>;

export default ClipboardListCheckCircle;
export { ClipboardListCheckCircle };
