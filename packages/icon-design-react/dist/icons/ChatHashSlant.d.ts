import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatHashSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatHashSlant: ForwardRefExoticComponent<ChatHashSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatHashSlant;
export { ChatHashSlant };
