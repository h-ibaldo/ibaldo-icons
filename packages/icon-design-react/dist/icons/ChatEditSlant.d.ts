import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatEditSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatEditSlant: ForwardRefExoticComponent<ChatEditSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatEditSlant;
export { ChatEditSlant };
