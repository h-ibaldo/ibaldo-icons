import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotsTall: ForwardRefExoticComponent<ChatDotsTallProps & RefAttributes<SVGSVGElement>>;

export default ChatDotsTall;
export { ChatDotsTall };
