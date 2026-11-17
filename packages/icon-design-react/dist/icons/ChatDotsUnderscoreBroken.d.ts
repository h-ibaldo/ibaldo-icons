import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsUnderscoreBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotsUnderscoreBroken: ForwardRefExoticComponent<ChatDotsUnderscoreBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatDotsUnderscoreBroken;
export { ChatDotsUnderscoreBroken };
