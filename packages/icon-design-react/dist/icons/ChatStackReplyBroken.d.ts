import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackReplyBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackReplyBroken: ForwardRefExoticComponent<ChatStackReplyBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatStackReplyBroken;
export { ChatStackReplyBroken };
