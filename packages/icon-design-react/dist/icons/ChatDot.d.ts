import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDot: ForwardRefExoticComponent<ChatDotProps & RefAttributes<SVGSVGElement>>;

export default ChatDot;
export { ChatDot };
