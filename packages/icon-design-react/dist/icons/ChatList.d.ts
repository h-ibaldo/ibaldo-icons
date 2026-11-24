import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatListProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatList: ForwardRefExoticComponent<ChatListProps & RefAttributes<SVGSVGElement>>;

export default ChatList;
export { ChatList };
