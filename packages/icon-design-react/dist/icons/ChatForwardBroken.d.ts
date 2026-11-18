import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatForwardBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatForwardBroken: ForwardRefExoticComponent<ChatForwardBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatForwardBroken;
export { ChatForwardBroken };
