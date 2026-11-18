import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackOffFlippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackOffFlipped: ForwardRefExoticComponent<ChatStackOffFlippedProps & RefAttributes<SVGSVGElement>>;

export default ChatStackOffFlipped;
export { ChatStackOffFlipped };
