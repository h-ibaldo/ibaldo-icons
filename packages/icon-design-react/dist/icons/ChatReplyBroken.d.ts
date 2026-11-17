import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatReplyBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatReplyBroken: ForwardRefExoticComponent<ChatReplyBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatReplyBroken;
export { ChatReplyBroken };
