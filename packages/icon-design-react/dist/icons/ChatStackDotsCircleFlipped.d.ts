import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackDotsCircleFlippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackDotsCircleFlipped: ForwardRefExoticComponent<ChatStackDotsCircleFlippedProps & RefAttributes<SVGSVGElement>>;

export default ChatStackDotsCircleFlipped;
export { ChatStackDotsCircleFlipped };
