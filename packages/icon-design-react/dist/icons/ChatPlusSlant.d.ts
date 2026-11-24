import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatPlusSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatPlusSlant: ForwardRefExoticComponent<ChatPlusSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatPlusSlant;
export { ChatPlusSlant };
