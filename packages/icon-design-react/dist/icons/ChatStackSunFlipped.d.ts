import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackSunFlippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackSunFlipped: ForwardRefExoticComponent<ChatStackSunFlippedProps & RefAttributes<SVGSVGElement>>;

export default ChatStackSunFlipped;
export { ChatStackSunFlipped };
