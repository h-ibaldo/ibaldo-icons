import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatOneCircleBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatOneCircleBroken: ForwardRefExoticComponent<ChatOneCircleBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatOneCircleBroken;
export { ChatOneCircleBroken };
