import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatReplyAllBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatReplyAllBoxy: ForwardRefExoticComponent<ChatReplyAllBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatReplyAllBoxy;
export { ChatReplyAllBoxy };
