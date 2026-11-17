import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatUserProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatUser: ForwardRefExoticComponent<ChatUserProps & RefAttributes<SVGSVGElement>>;

export default ChatUser;
export { ChatUser };
