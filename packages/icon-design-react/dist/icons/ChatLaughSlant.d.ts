import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatLaughSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatLaughSlant: ForwardRefExoticComponent<ChatLaughSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatLaughSlant;
export { ChatLaughSlant };
