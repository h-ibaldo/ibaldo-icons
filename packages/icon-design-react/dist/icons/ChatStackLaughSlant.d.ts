import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackLaughSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackLaughSlant: ForwardRefExoticComponent<ChatStackLaughSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatStackLaughSlant;
export { ChatStackLaughSlant };
