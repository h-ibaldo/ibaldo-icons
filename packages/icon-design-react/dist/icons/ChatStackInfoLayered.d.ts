import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackInfoLayeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackInfoLayered: ForwardRefExoticComponent<ChatStackInfoLayeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackInfoLayered;
export { ChatStackInfoLayered };
