import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatBanCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatBanCorner: ForwardRefExoticComponent<ChatBanCornerProps & RefAttributes<SVGSVGElement>>;

export default ChatBanCorner;
export { ChatBanCorner };
