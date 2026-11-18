import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTriangleRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTriangleRound: ForwardRefExoticComponent<ChatTriangleRoundProps & RefAttributes<SVGSVGElement>>;

export default ChatTriangleRound;
export { ChatTriangleRound };
