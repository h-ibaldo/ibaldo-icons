import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatLockCornerSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatLockCornerSlant: ForwardRefExoticComponent<ChatLockCornerSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatLockCornerSlant;
export { ChatLockCornerSlant };
