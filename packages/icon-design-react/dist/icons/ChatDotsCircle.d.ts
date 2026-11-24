import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotsCircle: ForwardRefExoticComponent<ChatDotsCircleProps & RefAttributes<SVGSVGElement>>;

export default ChatDotsCircle;
export { ChatDotsCircle };
