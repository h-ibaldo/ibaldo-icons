import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsCursorBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotsCursorBroken: ForwardRefExoticComponent<ChatDotsCursorBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatDotsCursorBroken;
export { ChatDotsCursorBroken };
