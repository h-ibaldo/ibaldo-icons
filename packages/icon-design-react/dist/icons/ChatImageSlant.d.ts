import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatImageSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatImageSlant: ForwardRefExoticComponent<ChatImageSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatImageSlant;
export { ChatImageSlant };
