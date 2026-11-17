import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackReplyAllProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackReplyAll: ForwardRefExoticComponent<ChatStackReplyAllProps & RefAttributes<SVGSVGElement>>;

export default ChatStackReplyAll;
export { ChatStackReplyAll };
