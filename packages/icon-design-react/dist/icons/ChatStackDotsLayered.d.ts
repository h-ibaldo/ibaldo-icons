import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackDotsLayeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackDotsLayered: ForwardRefExoticComponent<ChatStackDotsLayeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackDotsLayered;
export { ChatStackDotsLayered };
