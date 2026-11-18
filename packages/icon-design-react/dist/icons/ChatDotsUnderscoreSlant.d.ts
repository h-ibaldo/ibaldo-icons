import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsUnderscoreSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotsUnderscoreSlant: ForwardRefExoticComponent<ChatDotsUnderscoreSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatDotsUnderscoreSlant;
export { ChatDotsUnderscoreSlant };
