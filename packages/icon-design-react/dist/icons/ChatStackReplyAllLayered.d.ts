import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackReplyAllLayeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackReplyAllLayered: ForwardRefExoticComponent<ChatStackReplyAllLayeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackReplyAllLayered;
export { ChatStackReplyAllLayered };
