import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClipboardListXCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClipboardListXCircle: ForwardRefExoticComponent<ClipboardListXCircleProps & RefAttributes<SVGSVGElement>>;

export default ClipboardListXCircle;
export { ClipboardListXCircle };
