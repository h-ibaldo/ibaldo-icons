import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatPlusCircleSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatPlusCircleSlant: ForwardRefExoticComponent<ChatPlusCircleSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatPlusCircleSlant;
export { ChatPlusCircleSlant };
