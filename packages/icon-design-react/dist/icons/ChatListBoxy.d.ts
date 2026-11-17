import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatListBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatListBoxy: ForwardRefExoticComponent<ChatListBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatListBoxy;
export { ChatListBoxy };
