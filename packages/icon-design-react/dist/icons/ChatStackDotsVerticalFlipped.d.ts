import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackDotsVerticalFlippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackDotsVerticalFlipped: ForwardRefExoticComponent<ChatStackDotsVerticalFlippedProps & RefAttributes<SVGSVGElement>>;

export default ChatStackDotsVerticalFlipped;
export { ChatStackDotsVerticalFlipped };
