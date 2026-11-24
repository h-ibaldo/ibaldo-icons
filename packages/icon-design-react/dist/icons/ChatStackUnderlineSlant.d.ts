import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackUnderlineSlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackUnderlineSlant: ForwardRefExoticComponent<ChatStackUnderlineSlantProps & RefAttributes<SVGSVGElement>>;

export default ChatStackUnderlineSlant;
export { ChatStackUnderlineSlant };
