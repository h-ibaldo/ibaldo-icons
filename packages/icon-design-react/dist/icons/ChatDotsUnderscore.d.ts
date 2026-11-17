import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsUnderscoreProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotsUnderscore: ForwardRefExoticComponent<ChatDotsUnderscoreProps & RefAttributes<SVGSVGElement>>;

export default ChatDotsUnderscore;
export { ChatDotsUnderscore };
