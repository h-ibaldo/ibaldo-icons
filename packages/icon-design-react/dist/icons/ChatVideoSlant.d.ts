import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatVideoSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatVideoSlant: ForwardRefExoticComponent<ChatVideoSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatVideoSlant;
export { ChatVideoSlant };
