import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackTypingNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackTypingNotch: ForwardRefExoticComponent<ChatStackTypingNotchProps & RefAttributes<SVGSVGElement>>;

export default ChatStackTypingNotch;
export { ChatStackTypingNotch };
