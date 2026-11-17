import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsCursorRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotsCursorRound: ForwardRefExoticComponent<ChatDotsCursorRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatDotsCursorRound;
export { ChatDotsCursorRound };
