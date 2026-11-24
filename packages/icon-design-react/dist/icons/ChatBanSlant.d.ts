import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatBanSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatBanSlant: ForwardRefExoticComponent<ChatBanSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatBanSlant;
export { ChatBanSlant };
