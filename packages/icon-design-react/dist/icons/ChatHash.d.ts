import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatHashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatHash: ForwardRefExoticComponent<ChatHashProps & RefAttributes<SVGSVGElement>>;

export default ChatHash;
export { ChatHash };
