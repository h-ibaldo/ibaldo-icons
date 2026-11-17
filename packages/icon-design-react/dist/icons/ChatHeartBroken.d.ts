import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatHeartBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatHeartBroken: ForwardRefExoticComponent<ChatHeartBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatHeartBroken;
export { ChatHeartBroken };
