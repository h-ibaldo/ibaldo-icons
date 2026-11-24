import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackFlippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackFlipped: ForwardRefExoticComponent<ChatStackFlippedProps & RefAttributes<SVGSVGElement>>;

export default ChatStackFlipped;
export { ChatStackFlipped };
