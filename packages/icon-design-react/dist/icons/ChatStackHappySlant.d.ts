import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackHappySlantProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackHappySlant: ForwardRefExoticComponent<ChatStackHappySlantProps & RefAttributes<SVGSVGElement>>;

export default ChatStackHappySlant;
export { ChatStackHappySlant };
