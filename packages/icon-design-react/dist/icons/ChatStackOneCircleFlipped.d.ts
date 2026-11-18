import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackOneCircleFlippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackOneCircleFlipped: ForwardRefExoticComponent<ChatStackOneCircleFlippedProps & RefAttributes<SVGSVGElement>>;

export default ChatStackOneCircleFlipped;
export { ChatStackOneCircleFlipped };
