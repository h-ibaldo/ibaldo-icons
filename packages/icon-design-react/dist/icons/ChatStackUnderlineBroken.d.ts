import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackUnderlineBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackUnderlineBroken: ForwardRefExoticComponent<ChatStackUnderlineBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatStackUnderlineBroken;
export { ChatStackUnderlineBroken };
