import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackLockCornerNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackLockCornerNotch: ForwardRefExoticComponent<ChatStackLockCornerNotchProps & RefAttributes<SVGSVGElement>>;

export default ChatStackLockCornerNotch;
export { ChatStackLockCornerNotch };
