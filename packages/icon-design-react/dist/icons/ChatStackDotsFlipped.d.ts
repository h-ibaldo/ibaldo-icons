import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackDotsFlippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackDotsFlipped: ForwardRefExoticComponent<ChatStackDotsFlippedProps & RefAttributes<SVGSVGElement>>;

export default ChatStackDotsFlipped;
export { ChatStackDotsFlipped };
