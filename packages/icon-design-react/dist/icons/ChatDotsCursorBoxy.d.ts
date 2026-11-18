import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsCursorBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotsCursorBoxy: ForwardRefExoticComponent<ChatDotsCursorBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatDotsCursorBoxy;
export { ChatDotsCursorBoxy };
