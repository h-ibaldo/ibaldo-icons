import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatOffSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatOffSlant: ForwardRefExoticComponent<ChatOffSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatOffSlant;
export { ChatOffSlant };
