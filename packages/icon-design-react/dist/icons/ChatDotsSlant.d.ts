import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotsSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotsSlant: ForwardRefExoticComponent<ChatDotsSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatDotsSlant;
export { ChatDotsSlant };
