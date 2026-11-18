import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatCheckCornerSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatCheckCornerSlant: ForwardRefExoticComponent<ChatCheckCornerSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatCheckCornerSlant;
export { ChatCheckCornerSlant };
