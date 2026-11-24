import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatReplyBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatReplyBoxy: ForwardRefExoticComponent<ChatReplyBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatReplyBoxy;
export { ChatReplyBoxy };
