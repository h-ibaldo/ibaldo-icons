import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatUnderlineSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatUnderlineSlant: ForwardRefExoticComponent<ChatUnderlineSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatUnderlineSlant;
export { ChatUnderlineSlant };
