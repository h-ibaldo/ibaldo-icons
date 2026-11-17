import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackMinusDoubleFlippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackMinusDoubleFlipped: ForwardRefExoticComponent<ChatStackMinusDoubleFlippedProps & RefAttributes<SVGSVGElement>>;

export default ChatStackMinusDoubleFlipped;
export { ChatStackMinusDoubleFlipped };
