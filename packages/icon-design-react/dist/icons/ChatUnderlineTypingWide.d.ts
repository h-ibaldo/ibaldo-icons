import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatUnderlineTypingWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatUnderlineTypingWide: ForwardRefExoticComponent<ChatUnderlineTypingWideProps & RefAttributes<SVGSVGElement>>;

export default ChatUnderlineTypingWide;
export { ChatUnderlineTypingWide };
