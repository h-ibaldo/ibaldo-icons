import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatReplySlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatReplySlant: ForwardRefExoticComponent<ChatReplySlantProps & RefAttributes<SVGSVGElement>>;

export default ChatReplySlant;
export { ChatReplySlant };
