import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatUserSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatUserSlant: ForwardRefExoticComponent<ChatUserSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatUserSlant;
export { ChatUserSlant };
