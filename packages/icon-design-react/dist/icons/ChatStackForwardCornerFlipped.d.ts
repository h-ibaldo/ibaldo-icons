import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackForwardCornerFlippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackForwardCornerFlipped: ForwardRefExoticComponent<ChatStackForwardCornerFlippedProps & RefAttributes<SVGSVGElement>>;

export default ChatStackForwardCornerFlipped;
export { ChatStackForwardCornerFlipped };
