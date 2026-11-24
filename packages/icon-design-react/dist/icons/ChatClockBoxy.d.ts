import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatClockBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatClockBoxy: ForwardRefExoticComponent<ChatClockBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatClockBoxy;
export { ChatClockBoxy };
