import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChatStackHeartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChatStackHeart: ForwardRefExoticComponent<ChatStackHeartProps & RefAttributes<SVGSVGElement>>;

export default ChatStackHeart;
export { ChatStackHeart };
