import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackReplyAllSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackReplyAllSlant: ForwardRefExoticComponent<ChatStackReplyAllSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatStackReplyAllSlant;
export { ChatStackReplyAllSlant };
