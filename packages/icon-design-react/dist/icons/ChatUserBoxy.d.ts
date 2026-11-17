import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatUserBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatUserBoxy: ForwardRefExoticComponent<ChatUserBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatUserBoxy;
export { ChatUserBoxy };
