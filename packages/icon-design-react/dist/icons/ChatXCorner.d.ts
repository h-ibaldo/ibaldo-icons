import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatXCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatXCorner: ForwardRefExoticComponent<ChatXCornerProps & RefAttributes<SVGSVGElement>>;

export default ChatXCorner;
export { ChatXCorner };
