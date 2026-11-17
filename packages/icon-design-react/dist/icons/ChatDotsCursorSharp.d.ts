import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsCursorSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotsCursorSharp: ForwardRefExoticComponent<ChatDotsCursorSharpProps & RefAttributes<SVGSVGElement>>;

export default ChatDotsCursorSharp;
export { ChatDotsCursorSharp };
