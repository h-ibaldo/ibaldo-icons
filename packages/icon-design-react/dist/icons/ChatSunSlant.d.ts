import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatSunSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatSunSlant: ForwardRefExoticComponent<ChatSunSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatSunSlant;
export { ChatSunSlant };
