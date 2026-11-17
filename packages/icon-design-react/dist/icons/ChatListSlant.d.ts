import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatListSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatListSlant: ForwardRefExoticComponent<ChatListSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatListSlant;
export { ChatListSlant };
