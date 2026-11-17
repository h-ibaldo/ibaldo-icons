import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsCursorProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotsCursor: ForwardRefExoticComponent<ChatDotsCursorProps & RefAttributes<SVGSVGElement>>;

export default ChatDotsCursor;
export { ChatDotsCursor };
