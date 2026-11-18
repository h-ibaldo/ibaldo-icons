import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackHappyBrokenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackHappyBroken: ForwardRefExoticComponent<ChatStackHappyBrokenProps & RefAttributes<SVGSVGElement>>;

export default ChatStackHappyBroken;
export { ChatStackHappyBroken };
