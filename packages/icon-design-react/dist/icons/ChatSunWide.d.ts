import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatSunWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatSunWide: ForwardRefExoticComponent<ChatSunWideProps & RefAttributes<SVGSVGElement>>;

export default ChatSunWide;
export { ChatSunWide };
