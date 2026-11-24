import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsCircleBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotsCircleBroken: ForwardRefExoticComponent<ChatDotsCircleBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatDotsCircleBroken;
export { ChatDotsCircleBroken };
