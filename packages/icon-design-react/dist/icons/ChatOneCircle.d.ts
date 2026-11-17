import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatOneCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatOneCircle: ForwardRefExoticComponent<ChatOneCircleProps & RefAttributes<SVGSVGElement>>;

export default ChatOneCircle;
export { ChatOneCircle };
