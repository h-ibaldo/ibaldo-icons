import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatHeartBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatHeartBoxy: ForwardRefExoticComponent<ChatHeartBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatHeartBoxy;
export { ChatHeartBoxy };
