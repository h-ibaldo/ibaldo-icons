import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsCursorSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotsCursorSlant: ForwardRefExoticComponent<ChatDotsCursorSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatDotsCursorSlant;
export { ChatDotsCursorSlant };
