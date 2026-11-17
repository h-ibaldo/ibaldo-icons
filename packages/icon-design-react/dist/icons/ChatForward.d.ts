import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatForwardProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatForward: ForwardRefExoticComponent<ChatForwardProps & RefAttributes<SVGSVGElement>>;

export default ChatForward;
export { ChatForward };
