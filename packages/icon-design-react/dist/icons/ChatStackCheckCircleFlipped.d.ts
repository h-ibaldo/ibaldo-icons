import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackCheckCircleFlippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackCheckCircleFlipped: ForwardRefExoticComponent<ChatStackCheckCircleFlippedProps & RefAttributes<SVGSVGElement>>;

export default ChatStackCheckCircleFlipped;
export { ChatStackCheckCircleFlipped };
