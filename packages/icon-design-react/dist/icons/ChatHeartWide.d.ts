import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatHeartWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatHeartWide: ForwardRefExoticComponent<ChatHeartWideProps & RefAttributes<SVGSVGElement>>;

export default ChatHeartWide;
export { ChatHeartWide };
