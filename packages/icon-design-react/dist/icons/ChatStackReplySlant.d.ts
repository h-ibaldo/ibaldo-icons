import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackReplySlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackReplySlant: ForwardRefExoticComponent<ChatStackReplySlantProps & RefAttributes<SVGSVGElement>>;

export default ChatStackReplySlant;
export { ChatStackReplySlant };
