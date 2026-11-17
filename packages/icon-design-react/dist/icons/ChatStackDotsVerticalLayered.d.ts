import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackDotsVerticalLayeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackDotsVerticalLayered: ForwardRefExoticComponent<ChatStackDotsVerticalLayeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackDotsVerticalLayered;
export { ChatStackDotsVerticalLayered };
