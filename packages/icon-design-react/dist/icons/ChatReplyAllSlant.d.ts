import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatReplyAllSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatReplyAllSlant: ForwardRefExoticComponent<ChatReplyAllSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatReplyAllSlant;
export { ChatReplyAllSlant };
