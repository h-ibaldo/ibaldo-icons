import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatTypingWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatTypingWide: ForwardRefExoticComponent<ChatTypingWideProps & RefAttributes<SVGSVGElement>>;

export default ChatTypingWide;
export { ChatTypingWide };
