import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatClockWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatClockWide: ForwardRefExoticComponent<ChatClockWideProps & RefAttributes<SVGSVGElement>>;

export default ChatClockWide;
export { ChatClockWide };
