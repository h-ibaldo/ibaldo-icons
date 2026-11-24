import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackAlertCircleFlippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackAlertCircleFlipped: ForwardRefExoticComponent<ChatStackAlertCircleFlippedProps & RefAttributes<SVGSVGElement>>;

export default ChatStackAlertCircleFlipped;
export { ChatStackAlertCircleFlipped };
