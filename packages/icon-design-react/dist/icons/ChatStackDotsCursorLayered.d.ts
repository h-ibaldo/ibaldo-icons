import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackDotsCursorLayeredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackDotsCursorLayered: ForwardRefExoticComponent<ChatStackDotsCursorLayeredProps & RefAttributes<SVGSVGElement>>;

export default ChatStackDotsCursorLayered;
export { ChatStackDotsCursorLayered };
