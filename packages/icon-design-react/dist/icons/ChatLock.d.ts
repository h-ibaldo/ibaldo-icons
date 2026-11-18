import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatLockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatLock: ForwardRefExoticComponent<ChatLockProps & RefAttributes<SVGSVGElement>>;

export default ChatLock;
export { ChatLock };
