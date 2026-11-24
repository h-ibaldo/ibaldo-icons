import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatSearchCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatSearchCorner: ForwardRefExoticComponent<ChatSearchCornerProps & RefAttributes<SVGSVGElement>>;

export default ChatSearchCorner;
export { ChatSearchCorner };
