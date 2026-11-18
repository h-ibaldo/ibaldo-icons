import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatLockCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatLockCorner: ForwardRefExoticComponent<ChatLockCornerProps & RefAttributes<SVGSVGElement>>;

export default ChatLockCorner;
export { ChatLockCorner };
