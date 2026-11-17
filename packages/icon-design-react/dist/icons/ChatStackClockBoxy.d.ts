import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackClockBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackClockBoxy: ForwardRefExoticComponent<ChatStackClockBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackClockBoxy;
export { ChatStackClockBoxy };
