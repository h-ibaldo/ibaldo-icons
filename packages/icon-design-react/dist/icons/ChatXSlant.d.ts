import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatXSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatXSlant: ForwardRefExoticComponent<ChatXSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatXSlant;
export { ChatXSlant };
