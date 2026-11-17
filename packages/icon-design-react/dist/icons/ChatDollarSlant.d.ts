import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDollarSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDollarSlant: ForwardRefExoticComponent<ChatDollarSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatDollarSlant;
export { ChatDollarSlant };
