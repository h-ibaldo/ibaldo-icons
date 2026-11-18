import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDots: ForwardRefExoticComponent<ChatDotsProps & RefAttributes<SVGSVGElement>>;

export default ChatDots;
export { ChatDots };
