import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackEditLayeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackEditLayered: ForwardRefExoticComponent<ChatStackEditLayeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackEditLayered;
export { ChatStackEditLayered };
