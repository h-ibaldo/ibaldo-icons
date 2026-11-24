import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackSearchCornerFlippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackSearchCornerFlipped: ForwardRefExoticComponent<ChatStackSearchCornerFlippedProps & RefAttributes<SVGSVGElement>>;

export default ChatStackSearchCornerFlipped;
export { ChatStackSearchCornerFlipped };
