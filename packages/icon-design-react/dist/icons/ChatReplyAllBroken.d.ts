import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatReplyAllBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatReplyAllBroken: ForwardRefExoticComponent<ChatReplyAllBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatReplyAllBroken;
export { ChatReplyAllBroken };
