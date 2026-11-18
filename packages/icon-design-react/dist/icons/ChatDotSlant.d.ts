import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatDotSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatDotSlant: ForwardRefExoticComponent<ChatDotSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatDotSlant;
export { ChatDotSlant };
