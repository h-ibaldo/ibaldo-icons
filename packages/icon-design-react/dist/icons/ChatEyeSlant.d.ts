import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatEyeSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatEyeSlant: ForwardRefExoticComponent<ChatEyeSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatEyeSlant;
export { ChatEyeSlant };
