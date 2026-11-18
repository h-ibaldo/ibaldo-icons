import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatSlant: ForwardRefExoticComponent<ChatSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatSlant;
export { ChatSlant };
