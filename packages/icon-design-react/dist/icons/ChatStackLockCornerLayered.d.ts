import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackLockCornerLayeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackLockCornerLayered: ForwardRefExoticComponent<ChatStackLockCornerLayeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackLockCornerLayered;
export { ChatStackLockCornerLayered };
