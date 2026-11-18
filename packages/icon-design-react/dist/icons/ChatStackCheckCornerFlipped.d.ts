import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackCheckCornerFlippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackCheckCornerFlipped: ForwardRefExoticComponent<ChatStackCheckCornerFlippedProps & RefAttributes<SVGSVGElement>>;

export default ChatStackCheckCornerFlipped;
export { ChatStackCheckCornerFlipped };
