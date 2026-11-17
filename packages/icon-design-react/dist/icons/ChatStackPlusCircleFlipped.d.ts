import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackPlusCircleFlippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackPlusCircleFlipped: ForwardRefExoticComponent<ChatStackPlusCircleFlippedProps & RefAttributes<SVGSVGElement>>;

export default ChatStackPlusCircleFlipped;
export { ChatStackPlusCircleFlipped };
