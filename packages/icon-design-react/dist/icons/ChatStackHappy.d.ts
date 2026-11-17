import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackHappyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackHappy: ForwardRefExoticComponent<ChatStackHappyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackHappy;
export { ChatStackHappy };
