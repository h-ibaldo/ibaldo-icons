import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatPlusCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatPlusCorner: ForwardRefExoticComponent<ChatPlusCornerProps & RefAttributes<SVGSVGElement>>;

export default ChatPlusCorner;
export { ChatPlusCorner };
