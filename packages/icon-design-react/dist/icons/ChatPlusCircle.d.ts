import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatPlusCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatPlusCircle: ForwardRefExoticComponent<ChatPlusCircleProps & RefAttributes<SVGSVGElement>>;

export default ChatPlusCircle;
export { ChatPlusCircle };
