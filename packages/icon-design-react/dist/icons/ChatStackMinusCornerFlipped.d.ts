import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackMinusCornerFlippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackMinusCornerFlipped: ForwardRefExoticComponent<ChatStackMinusCornerFlippedProps & RefAttributes<SVGSVGElement>>;

export default ChatStackMinusCornerFlipped;
export { ChatStackMinusCornerFlipped };
