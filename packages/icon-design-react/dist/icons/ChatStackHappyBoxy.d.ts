import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackHappyBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackHappyBoxy: ForwardRefExoticComponent<ChatStackHappyBoxyProps & RefAttributes<SVGSVGElement>>;

export default ChatStackHappyBoxy;
export { ChatStackHappyBoxy };
