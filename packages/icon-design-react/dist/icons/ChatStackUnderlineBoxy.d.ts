import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackUnderlineBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackUnderlineBoxy: ForwardRefExoticComponent<ChatStackUnderlineBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackUnderlineBoxy;
export { ChatStackUnderlineBoxy };
