import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatInfoSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatInfoSlant: ForwardRefExoticComponent<ChatInfoSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatInfoSlant;
export { ChatInfoSlant };
