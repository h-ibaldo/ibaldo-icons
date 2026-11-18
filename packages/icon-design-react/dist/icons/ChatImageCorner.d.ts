import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatImageCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatImageCorner: ForwardRefExoticComponent<ChatImageCornerProps & RefAttributes<SVGSVGElement>>;

export default ChatImageCorner;
export { ChatImageCorner };
