import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckSlant: ForwardRefExoticComponent<ChatCheckSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckSlant;
export { ChatCheckSlant };
