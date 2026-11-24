import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackLockCornerFlippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackLockCornerFlipped: ForwardRefExoticComponent<ChatStackLockCornerFlippedProps & RefAttributes<SVGSVGElement>>;

export default ChatStackLockCornerFlipped;
export { ChatStackLockCornerFlipped };
