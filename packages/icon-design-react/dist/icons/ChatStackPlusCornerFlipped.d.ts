import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackPlusCornerFlippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackPlusCornerFlipped: ForwardRefExoticComponent<ChatStackPlusCornerFlippedProps & RefAttributes<SVGSVGElement>>;

export default ChatStackPlusCornerFlipped;
export { ChatStackPlusCornerFlipped };
