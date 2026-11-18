import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardXCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardXCircle: ForwardRefExoticComponent<ClipboardXCircleProps & RefAttributes<SVGSVGElement>>;

export default ClipboardXCircle;
export { ClipboardXCircle };
