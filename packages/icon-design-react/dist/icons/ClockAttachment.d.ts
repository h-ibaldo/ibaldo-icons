import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockAttachmentProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockAttachment: ForwardRefExoticComponent<ClockAttachmentProps & RefAttributes<SVGSVGElement>>;

export default ClockAttachment;
export { ClockAttachment };
