import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackTypingBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackTypingBroken: ForwardRefExoticComponent<ChatStackTypingBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatStackTypingBroken;
export { ChatStackTypingBroken };
