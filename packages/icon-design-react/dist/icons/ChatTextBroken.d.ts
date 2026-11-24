import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTextBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTextBroken: ForwardRefExoticComponent<ChatTextBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatTextBroken;
export { ChatTextBroken };
