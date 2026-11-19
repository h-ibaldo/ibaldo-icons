import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackLayeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackLayered: ForwardRefExoticComponent<ChatStackLayeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackLayered;
export { ChatStackLayered };
