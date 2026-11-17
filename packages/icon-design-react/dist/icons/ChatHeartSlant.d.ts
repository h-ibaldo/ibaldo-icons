import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatHeartSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatHeartSlant: ForwardRefExoticComponent<ChatHeartSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatHeartSlant;
export { ChatHeartSlant };
