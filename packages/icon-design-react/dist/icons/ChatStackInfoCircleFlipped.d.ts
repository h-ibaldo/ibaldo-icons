import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackInfoCircleFlippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackInfoCircleFlipped: ForwardRefExoticComponent<ChatStackInfoCircleFlippedProps & RefAttributes<SVGSVGElement>>;

export default ChatStackInfoCircleFlipped;
export { ChatStackInfoCircleFlipped };
