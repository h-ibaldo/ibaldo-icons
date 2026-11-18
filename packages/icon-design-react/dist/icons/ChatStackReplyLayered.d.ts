import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackReplyLayeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackReplyLayered: ForwardRefExoticComponent<ChatStackReplyLayeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackReplyLayered;
export { ChatStackReplyLayered };
