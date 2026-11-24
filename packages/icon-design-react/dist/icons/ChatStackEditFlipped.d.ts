import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackEditFlippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackEditFlipped: ForwardRefExoticComponent<ChatStackEditFlippedProps & RefAttributes<SVGSVGElement>>;

export default ChatStackEditFlipped;
export { ChatStackEditFlipped };
