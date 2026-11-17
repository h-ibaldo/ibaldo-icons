import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackForwardLayeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackForwardLayered: ForwardRefExoticComponent<ChatStackForwardLayeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackForwardLayered;
export { ChatStackForwardLayered };
