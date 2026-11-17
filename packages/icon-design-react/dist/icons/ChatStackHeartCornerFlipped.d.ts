import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackHeartCornerFlippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackHeartCornerFlipped: ForwardRefExoticComponent<ChatStackHeartCornerFlippedProps & RefAttributes<SVGSVGElement>>;

export default ChatStackHeartCornerFlipped;
export { ChatStackHeartCornerFlipped };
