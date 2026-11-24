import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatHappySlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatHappySlant: ForwardRefExoticComponent<ChatHappySlantProps & RefAttributes<SVGSVGElement>>;

export default ChatHappySlant;
export { ChatHappySlant };
