import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatForwardCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatForwardCorner: ForwardRefExoticComponent<ChatForwardCornerProps & RefAttributes<SVGSVGElement>>;

export default ChatForwardCorner;
export { ChatForwardCorner };
