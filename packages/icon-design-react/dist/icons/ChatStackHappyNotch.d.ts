import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackHappyNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackHappyNotch: ForwardRefExoticComponent<ChatStackHappyNotchProps & RefAttributes<SVGSVGElement>>;

export default ChatStackHappyNotch;
export { ChatStackHappyNotch };
